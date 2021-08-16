import React from "react";

import * as styles from './NavBar.module.scss'

import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <MobileNavigation />
            <Navigation />
        </nav>
    )
}

export default NavBar;