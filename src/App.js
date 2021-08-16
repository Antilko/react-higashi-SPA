import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import AppContext from './components/context'

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Movie from './components/Movie'
import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import Location from './pages/Location/Location'
import Contacts from './pages/Contacts/Contacts'
import Delivery from './pages/Delivery/Delivery'
import Returns from './pages/Returns/Returns'
import Info from './pages/FooterInfo/Info'

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const getFavorites = await axios.get('https://611239dc89c6d00017ac0194.mockapi.io/favorites');
        const getCartItems = await axios.get('https://611239dc89c6d00017ac0194.mockapi.io/cart');
        const getItems = await axios.get('https://611239dc89c6d00017ac0194.mockapi.io/items/');

        setIsLoading(false);
        setFavorites(getFavorites.data);
        setCartItems(getCartItems.data);
        setItems(getItems.data);
      } catch (error) {
        alert('Ошибка при запросе данных :(')
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (product) => {
    try {
      const findItem = cartItems.find((cartProduct) => Number(cartProduct.parentId) === Number(product.id));
      if(findItem) {
        setCartItems([...cartItems.filter((item) => Number(item.parentId) !== Number(product.id))]);
        await axios.delete(`https://611239dc89c6d00017ac0194.mockapi.io/cart/${findItem.id}`);
      } else {
        const {data} = await axios.post('https://611239dc89c6d00017ac0194.mockapi.io/cart', product);
        setCartItems([...cartItems, data]);
      }
    } catch (error) {
      alert('К сожалению, не удалось добавить товар в корзину')
    }
  }

  const onAddToFavorite = async (product) => {
    try {
      const findFavorites = favorites.find((favoriteProduct) => Number(favoriteProduct.parentId) === Number(product.id));
      if(findFavorites) {
        setFavorites([...favorites.filter((item) => Number(item.parentId) !== Number(product.id))]);
        await axios.delete(`https://611239dc89c6d00017ac0194.mockapi.io/favorites/${findFavorites.id}`);
      } else {
        const {data} = await axios.post('https://611239dc89c6d00017ac0194.mockapi.io/favorites', product);
        setFavorites([...favorites, data]);
      }
    } catch (error) {
      alert('К сожалению, не удалось добавить товар в избранное')
    }  
  }

  const onRemoveFromCart = async (id) => {
    try {
      await axios.delete(`https://611239dc89c6d00017ac0194.mockapi.io/cart/${id}`);
      setCartItems([...cartItems.filter((item) => Number(item.id) !== Number(id))]);
    } catch (error) {
      alert('Ошибка при удалении из корзины')
    }
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  }

  const isProductAdded = (id) => {
    return cartItems.some((product) => Number(product.parentId) === Number(id) ? true : false);
  }

  const isFavoriteAdded = (id) => {
    return favorites.some((product) => Number(product.parentId) === Number(id) ? true : false);
  }

  return (
    <div className="App clear">
          
      <Movie />
      
      <AppContext.Provider 
        value={{ 
          items, 
          cartItems, 
          favorites, 
          isFavoriteAdded,
          isProductAdded, 
          onAddToFavorite, 
          onAddToCart, 
          setCartOpened, 
          setCartItems
        }}
      >

        <Cart 
          items={cartItems} 
          onClose={() => setCartOpened(false)} 
          onRemove={onRemoveFromCart}
          opened = {cartOpened}
        />

        <Header/>

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearch={onChangeSearch}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}

            
            favorites={favorites}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="/profile" exact>
          <Profile />
        </Route>

      </AppContext.Provider>

      <Route path="/location" exact>
          <Location />
      </Route>

      <Route path="/contacts" exact>
          <Contacts />
      </Route>

      <Route path="/delivery" exact>
          <Delivery />
      </Route>

      <Route path="/returns" exact>
          <Returns />
      </Route>

      <Route path="/info" exact>
          <Info />
      </Route>

      <Footer />
    </div>
  )
} 

export default App;