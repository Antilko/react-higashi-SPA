import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './InfoHeaderLinks.module.scss'

import arrow from '../../assets/elements/arrow.svg'

function Info({ title, image, description }) {

    return (
        <div className={styles.info}>
            <img className="mb-20" width="90px" height="90px" src={image} alt="Empty" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <Link to="/">
                <button className={styles.greenButton} >
                    <img src={arrow} alt="Arrow" />
                    Вернуться назад
                </button>
            </Link>
        </div>
    )
}

export default Info;