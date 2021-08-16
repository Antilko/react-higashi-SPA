import React from 'react';
import AppContext from '../../components/context';

import * as styles from './Favorites.module.scss'

import Card from '../../components/Card/Card';
import Info from '../../components/InfoHeaderLinks/InfoHeaderLinks';

import wetSmile from '../../assets/elements/wet_smile.png'

function Favorites() {
    const { favorites } = React.useContext(AppContext);

    return (
        <React.Fragment>
            {favorites.length > 0 ? (
                <div className="content p-30">
                    <div className="mb-40">
                        <h1 style={{textAlign: "center"}}>Мои закладки</h1>
                    </div>  

                    <div className={styles.favoritesList}>
                        {favorites.map((item, index) => (
                            <Card 
                            key={index + item.price}
                            favorited={true}
                            // onFavorite={onAddToFavorite}
                            {...item}
                            />
                        ))}
                    </div>
                </div>
            ) : ( 
                <Info
                title={'Закладок нет :('}
                description={'Вы пока что ничего не добавляли в закладки'}
                image={wetSmile} 
                />   
            )}
        </React.Fragment>
    )         
}

export default Favorites;