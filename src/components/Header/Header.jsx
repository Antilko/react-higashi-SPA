import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Header.module.scss'

import NavBar from '../NavBar/NavBar';

import logo from './../../assets/logos/logo2.png';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.headerLeft}>
                    <img src={logo} className="mr-15" alt="logo" />
                    <div>
                        <h3>HIGASHI ヒガシ</h3>
                        <p>Одежда, вдохновленная японской культурой</p>
                    </div>
                </div>
            </Link>

            <NavBar />
        </header>
    )
}

export default Header;