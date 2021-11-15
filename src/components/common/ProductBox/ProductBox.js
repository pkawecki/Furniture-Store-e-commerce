import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProductBox.module.scss';
import { Link } from 'react-router-dom';
import RatingStars from '../RatingStars/RatingStarsContainer';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  arrows,
  image,
  oldPrice,
  addToFavorites,
  removeFromFavorites,
  id,
  favorites,
  addToCompare,
  compareCount,
  compareList,
  userRating,
}) => {
  const handleAddToCompare = (event, id) => {
    const inCompare = compareList.some(product => product.id === id);
    event.preventDefault();
    if (compareCount < 4 && !inCompare) {
      addToCompare({ id });
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`/product/${id}`}>
          <img src={image} alt='arb bed' />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={`/product/${id}`}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.stars}>
          <RatingStars stars={stars} id={id} userRating={userRating} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            className={favorites ? styles.favorites : styles.outlines}
            onClick={e => {
              e.preventDefault();
              favorites ? removeFromFavorites({ id }) : addToFavorites({ id });
            }}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={e => handleAddToCompare(e, id)}
            className={arrows ? styles.arrows : ''}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <div className={styles.oldPrice}>{oldPrice}</div>
          <Button noHover variant='small' className={styles.newPrice}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  arrows: PropTypes.bool,
  image: PropTypes.node,
  favorites: PropTypes.bool,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  id: PropTypes.string,
  oldPrice: PropTypes.string,
  addToCompare: PropTypes.func,
  compareCount: PropTypes.number,
  compareList: PropTypes.array,
  userRating: PropTypes.number,
};

export default ProductBox;
