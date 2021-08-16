import React from 'react';
import axios from 'axios';
import {useCart} from '../hooks/useCart'

import * as styles from './Cart.module.scss'

import Info from '../InfoCart/InfoCart';
import OrderForm from '../OrderForm/OrderForm';

import removeButton from './../../assets/elements/btn-remove.svg';
import emptyCart from './../../assets/elements/empty-cart.jpg';
import completeOrder from './../../assets/elements/complete-order.jpg'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ onClose, onRemove, opened, items = [] }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://611239dc89c6d00017ac0194.mockapi.io/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderCompleted(true);
            setCartItems([]);
            
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://611239dc89c6d00017ac0194.mockapi.io/cart/${item.id}`);
                await delay(1000);
            }
        } catch (error) {
            alert('Ошибка при создании заказа:( Попробуйте совершить заказ позже')
        }
        setIsLoading(false);
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.cart}>
                <h2 className="d-flex justify-between mb-20">Корзина 
                    <img onClick={onClose} className="removeButton" alt="X-button" src={removeButton} />
                </h2>

                {items.length > 0 ? (
                    <React.Fragment>
                        <div className={styles.cartItems}>
                            {items.map((product, index) => (
                                <div key={index} className={styles.cartItem}>
                                    <div 
                                        style={{backgroundImage: `url(${product.imageUrl})`}} 
                                        className={styles.cartItemImg}>
                                    </div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{product.title}</p>
                                        <b>{product.price} BYN</b>
                                    </div>
                                    <img 
                                        className={styles.removeButton} 
                                        alt="X-button" 
                                        src={removeButton}
                                        onClick={() => onRemove(product.id)} />
                                </div>
                            ))}
                        </div>
                        <div className={styles.cartTotalPrice}>
                            <ul className="mb-20">
                                <li className="d-flex">
                                <span>Скидка 5%:</span>
                                <div className={styles.dotted}></div>
                                <b>{totalPrice / 100 * 5} BYN</b>
                                </li>

                                <li className="d-flex">
                                <span>Итого:</span>
                                <div className={styles.dotted}></div> 
                                <b>{totalPrice - totalPrice / 100 * 5} BYN</b>
                                </li>
                            </ul>
                        </div>
                        <OrderForm onClickOrder={onClickOrder} isLoading={isLoading} />
                    </React.Fragment>
                ) : ( 
                    <Info 
                        title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
                        description={isOrderCompleted
                              ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                              : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                        image={isOrderCompleted ? completeOrder  : emptyCart} 
                    />   
                )}
            </div>
        </div>
    )
}

export default Cart;