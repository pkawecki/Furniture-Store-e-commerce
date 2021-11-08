import {
  faExchangeAlt,
  faShoppingBasket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProductBox.module.scss';
import { Link } from 'react-router-dom';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  oldPrice,
  id,
  addToCompare,
  compareCount,
  compareList,
  heart,
  arrows,
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
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' className={heart ? styles.heart : ''}>
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
  heart: PropTypes.bool,
  arrows: PropTypes.bool,
  image: PropTypes.node,
  oldPrice: PropTypes.string,
  addToCompare: PropTypes.func,
  id: PropTypes.string,
  compareCount: PropTypes.number,
  compareList: PropTypes.array,
};

export default ProductBox;
