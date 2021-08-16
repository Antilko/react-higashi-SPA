import React from 'react';
import axios from 'axios';

import * as styles from './Profile.module.scss'

import Card from '../../components/Card/Card';
import Info from '../../components/InfoHeaderLinks/InfoHeaderLinks';

import sadSmile from '../../assets/elements/sad_smile.png'

function Profile() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get('https://611239dc89c6d00017ac0194.mockapi.io/orders');
                // setOrders(data.map((products) => products.items).flat());
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при зазгрузке заказов');
            }
        }

        fetchData();
    }, [])

    return (
        <React.Fragment>
            {orders.length > 0 ? (
                <div className="content p-30">
                    <div className="mb-40">
                        <h1 style={{textAlign: "center"}}>Мои заказы</h1>
                    </div>  
        
                    <div className={styles.orderList}>
                        {(isLoading ? [...Array(2)] : orders).map((item, index) => (
                            <Card 
                                key={index}
                                loading={isLoading}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            ) : ( 
                <Info
                title={'У вас нет заказов :('}
                description={'Оформите хотя бы один заказ, чтобы увидеть историю покупок'}
                image={sadSmile} 
                />   
            )}
        </React.Fragment>
    )
}

export default Profile;