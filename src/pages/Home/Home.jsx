import React from 'react';

import * as styles from './Home.module.scss'

import Slider from '../../components/Slider/Slider';
import Card from '../../components/Card/Card';

import search from '../../assets/elements/search.svg';

function Home({ 
    items, 
    searchValue, 
    onChangeSearch, 
    onAddToFavorite, 
    onAddToCart, 
    isLoading, 
}) {
    const renderProducts = () => {
        const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

        return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
            <Card 
                key={index}
                onAdd={(product) => onAddToCart(product)} 
                onFavorite={(product) => onAddToFavorite(product)}
                loading={isLoading}
                {...item}
            />
        ));
    };

    return (
        <React.Fragment>
            <Slider />
            
            <main>
                <div className="p-30">
                    <div className={styles.wrapper}>
                        <h2>{searchValue ? `Поиск по запросу: "${searchValue}"` : `HANAMI 2021`}</h2>
                        <div className={styles.searchBlock}>
                            <img src={search} alt="Search" />
                            <input onChange={onChangeSearch} className="p-15" placeholder="Поиск..." />
                        </div>
                    </div>  
                    <div className={styles.products__list}>{renderProducts()}</div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Home;