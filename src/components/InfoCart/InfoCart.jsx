import React from 'react';
import AppContext from '../context';

import * as styles from './InfoCart.module.scss'

import arrow from './../../assets/elements/arrow.svg';

function Info({ title, image, description }) {
    const context = React.useContext(AppContext);

    return (
        <div className={styles.cartEmpty}>
            <img className="mb-20" width="120px" src={image} alt="Empty" />
            <h2 className="mb-20">{title}</h2>
            <p>{description}</p>
            <button onClick={() => context.setCartOpened(false)} className={styles.greenButton}>
                <img src={arrow} alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;