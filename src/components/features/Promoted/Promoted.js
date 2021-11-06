import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faExchangeAlt,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Promoted.module.scss';
import Button from '../../common/Button/Button';
import initialState from '../../../redux/initialState';

const Promoted = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={'col-4 ' + styles.left}>
          <div className={styles.hotDeals}>
            <h3>HOT DEALS</h3>
          </div>
          <div className={'col-auto ' + styles.dots}>
            <ul>
              <li>
                <a></a>
              </li>
              <li>
                <a></a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
          <div className={styles.photo}>
            <img src={initialState.products[0].image} alt='promo bed' />
            <div className={styles.button}>
              <Button variant='small'>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
            </div>
          </div>
          <div className={styles.content}>
            <h5>{initialState.products[0].name}</h5>
            <div className={styles.stars}>
              <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.actions}>
            <div className={styles.outlines}>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </Button>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.price}>
              <div className={styles.oldPrice}>{initialState.products[0].oldPrice}</div>
              <Button noHover variant='small' className={styles.newPrice}>
                $ {initialState.products[0].price}
              </Button>
            </div>
          </div>
        </div>
        <div className={'col-8 ' + styles.right}>
          <h3> right </h3>
        </div>
      </div>
    </div>
  </div>
);

export default Promoted;
