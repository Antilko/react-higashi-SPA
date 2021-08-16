import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import AppContext from '../context';

import * as styles from './NavBar.module.scss'

import cart from './../../assets/elements/cart.svg';
import user from './../../assets/elements/user.svg';
import favorites from './../../assets/elements/favorites.svg';

function Navigation() {

    const { totalPrice } = useCart();
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className={styles.navigation}>
            <ul className={styles.nav}>
                <li className={styles.cart} onClick={setCartOpened} >
                    <img width={18} height={18} src={cart} alt="cart" />
                    <span className="ml-10">{totalPrice - totalPrice / 100 * 5}</span>
                </li>
                <li className="mr-25">
                    <Link to="/favorites">
                        <img width={18} height={18} src={favorites} alt="favorites" />
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <img width={18} height={18} src={user} alt="user" />
                    </Link>              
                </li>
            </ul>
        </div>
    )
}

export default Navigation;