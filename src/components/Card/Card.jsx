import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../context';
import * as styles from './Card.module.scss'

import unliked from './../../assets/elements/favorites.svg';
import liked from './../../assets/elements/liked.svg';
import addButton from './../../assets/elements/btn-add.svg';
import addedButton from './../../assets/elements/btn-added.svg';

function Card({ 
    id, 
    title, 
    imageUrl, 
    price, 
    onFavorite, 
    onAdd, 
    favorited = false, 
    loading = false,
}) {
    const { isProductAdded, isFavoriteAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const dataObj = { id, parentId: id, title, imageUrl, price };

    const onClickAdd = () => {
        onAdd(dataObj);
    }

    const onClickFavorite = () => {
        onFavorite(dataObj)
        setIsFavorite(!isFavorite);
    }
 
    return ( 
    <div className={styles.card}>
        {loading ? (
            <ContentLoader 
                speed={2}
                width={165}
                height={266}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                >
                <rect x="0" y="0" rx="10" ry="10" width="165" height="130" /> 
                <rect x="0" y="167" rx="5" ry="5" width="165" height="15" /> 
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
                <rect x="0" y="234" rx="5" ry="5" width="80" height="25" /> 
                <rect x="124" y="231" rx="10" ry="10" width="30" height="30" />
            </ContentLoader>
            ) : (
            <React.Fragment>
                {onFavorite && (
                    <div className={styles.favoriteItem} onClick={onClickFavorite}>
                        <img src={isFavoriteAdded(id) ? liked : unliked}  alt="favorites" />
                    </div>)}

                    <div className={styles.itemImg}>
                        <img width='100%' height={150} src={imageUrl} alt="T-shirt" />
                    </div>

                    <h5 className="mb-15">{title}</h5>

                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price:</span>
                            <b>{price} BYN</b>
                        </div>
                        {onAdd && (<button 
                            className={styles.addButton} 
                            onClick={onClickAdd}>
                            <img src={isProductAdded(id) ? addedButton : addButton} alt="+Button" />
                        </button>)
                        }
                    </div>
            </React.Fragment>
            )}
    </div>
    )
}

export default Card;