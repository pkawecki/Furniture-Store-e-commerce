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
          <div className={styles.topper}>
            <div className={'col-auto ' + styles.hotDeals}>
              <h3>HOT DEALS</h3>
            </div>
            <div className={'col-4 ' + styles.dots}>
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
          </div>
          <div className={styles.photo}>
            <img src={initialState.products[0].image} alt='promo bed' />
            <div className={styles.button}>
              <div>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>
              <div className={styles.timer}>
                <div className='row justify-content-around'>
                  <div className={'col-3 ' + styles.timerItem}>
                    <div className={styles.number}>
                      <span>25</span>
                    </div>
                    <div className={styles.unit}>
                      <span>DAYS</span>
                    </div>
                  </div>
                  <div className={'col-3 ' + styles.timerItem}>
                    <div className={styles.number}>
                      <span>10</span>
                    </div>
                    <div className={styles.unit}>
                      <span>HRS</span>
                    </div>
                  </div>
                  <div className={'col-3 ' + styles.timerItem}>
                    <div className={styles.number}>
                      <span>45</span>
                    </div>
                    <div className={styles.unit}>
                      <span>MIN</span>
                    </div>
                  </div>
                  <div className={'col-3 ' + styles.timerItem}>
                    <div className={styles.number}>
                      <span>30</span>
                    </div>
                    <div className={styles.unit}>
                      <span>SECS</span>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className={styles.imgWrapper}>
            <img src={initialState.products[12].image} alt='right side image' />
          </div>
          <div className={styles.shadowWrapper}></div>
          <div className={styles.shadowTitle}>
            INDOOR <span>FURNITURE</span>
            <div className={styles.shadowSubtitle}>SAVE UP TO 50% OF ALL FURNITURE</div>
          </div>
          <div className={styles.centerButton}>
            <Button variant='big'>SHOP NOW</Button>
          </div>
          <div className={styles.shadowButtonsWrapper}>
            <div className='row'>
              <div className={styles.buttonLong}>
                <Button variant='long'>{'<'}</Button>
              </div>
              <div className={styles.buttonLong}>
                <Button variant='long'>{'>'}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Promoted;
