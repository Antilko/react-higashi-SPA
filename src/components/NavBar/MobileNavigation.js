import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {useCart} from '../hooks/useCart';
import AppContext from '../context';

import * as styles from './NavBar.module.scss';

import burgerMenu from '../../assets/elements/burger.svg'
import btnClose from '../../assets/elements/btn-remove.svg'

function MobileNavigation() {
    const hamburgerIcon = <img width={18} height={18} src={burgerMenu} alt="cart"
                                className={styles.hamburger}
                                size='40px' 
                                color='white' 
                                onClick={() => setOpen(!open)} 
                            />

    const closeIcon = <img width={18} height={18} src={btnClose} alt="cart"
                                className={styles.hamburger}
                                size='40px' 
                                color='white' 
                                onClick={() => setOpen(!open)} 
                            />
    
    const [open, setOpen] = useState(false);
    const { totalPrice } = useCart();
    const { setCartOpened } = React.useContext(AppContext);

    const closeMobileMenu = () => setOpen(false);

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    const onClickCart = () => {
        closeMobileMenu();
        setCartOpened(true);
    }

    return (
        <div className={styles.mobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <motion.ul initial={animateFrom} animate={animateTo}>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.1}}
                onClick={onClickCart}>
                Корзина
                <span className="ml-10">{totalPrice - totalPrice / 100 * 5}</span>
            </motion.li>

            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.3}}
                onClick={() => closeMobileMenu()}>
                <Link to="/favorites">
                    Избранное
                </Link>
            </motion.li>

            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.5}}
                onClick={() => closeMobileMenu()}>
                <Link to="/profile">
                    Профиль
                </Link>   
            </motion.li>

            <motion.li className={styles.contacts}
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.7}}
                onClick={() => closeMobileMenu()}>
                <Link to="/contacts">
                   Контакты
                </Link>   
            </motion.li>

            <motion.li className={styles.info}
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.9}}
                onClick={() => closeMobileMenu()}>
                <Link to="/info">
                    Инфо
                </Link>   
            </motion.li>
        </motion.ul>}
        </div>

    )
}

export default MobileNavigation;