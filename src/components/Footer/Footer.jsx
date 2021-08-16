import React from "react";
import { Link } from 'react-router-dom';

import * as styles from './Footer.module.scss'

import logo from './../../assets/logos/logo_footer.png';
import paymentsLogo from './../../assets/logos/logo-payments.png';
import instaLogo from './../../assets/logos/insta-logo.png';
import fbLogo from './../../assets/logos/fb-logo.png';
import vkLogo from './../../assets/logos/vk-logo.png';

function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div>
                    <div className={styles.footerLogo}>
                        <Link to="/">
                            <img className={styles.logo} alt="logo" src ={logo} />
                        </Link>
                    </div>
                    <div className="mb-15">Текущая коллекция названа в честь японской традиции наблюдения за цветением сакуры, называемой "Ханами". В последние десятилетия XX века традиция наблюдения за цветением сакуры появилась и в других регионах мира.</div>
                    <div className={styles.info}><i>2020. Higashi Wear. Все права на изображения и контент защищены правообладателем) ИП Антон Андросик г.Минск. ул. Притыцкого. Свидетельство о гос регистрации №93799932 выдано 29.12.2020 Минским Горисполкомом. Регистрация в Торговом реестре от 26.06.2019<br /> Время работы: 11.00 - 20.00</i></div>
                    <div className="mt-20 mb-30"><img className={styles.paymentsLogo} width={370} src={paymentsLogo} alt="payments" /></div>
                </div>

                <div className={styles.footerListItems}>
                    <div className={styles.footerListItem}>
                        <div className={styles.footerItem}>О нас</div>
                        <ul>
                            <li className="mb-15">
                                <Link to="/location">
                                    <span>Как добраться?</span>
                                </Link>   
                            </li>
                            <li className="mb-15">
                                <Link to="/contacts">
                                    <span>Контакты</span>
                                </Link>  
                            </li>
                            <li className="mb-15">
                                <Link to="/delivery">
                                    <span>Доставка</span>
                                </Link>  
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerListItem}>
                        <div className={styles.footerItem}>Помощь</div>
                        <ul>
                            <li className="mb-15">
                                <Link to="/returns">
                                    <span>Возврат товара</span>
                                </Link> 
                            </li>
                            <li className="mb-15">
                                <Link to="/info">
                                    <span>Инфо</span>
                                </Link> 
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerListItem}>
                        <div className={styles.footerItem}>Мы в сети</div>
                        <ul>
                            <a target="_blank" rel="noreferrer" href="https://instagram.com/higashiwear/"><li className="mb-15 d-flex"><span className="mr-10"><img src={instaLogo} alt="insta" /></span>Instagram</li></a>
                            <a target="_blank" rel="noreferrer" href="https://facebook.com"><li className="mb-15 d-flex"><span className="mr-10"><img src={fbLogo} alt="fb" /></span>Facebook</li></a>
                            <a target="_blank" rel="noreferrer" href="https://vk.com"><li className="mb-15 d-flex"><span className="mr-10"><img src={vkLogo} alt="vk"/></span>ВКонтакте</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;