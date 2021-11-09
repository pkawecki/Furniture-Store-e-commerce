import {
  faExchangeAlt,
  faEye,
  faShoppingBasket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductSlider from '../../common/ProductSlider/ProductSlider'
import PromoCountdownTimer from '../../common/PromoCountdownTimer/PromoCountdownTimer'
import PropTypes from 'prop-types';
import React from 'react';
import initialState from '../../../redux/initialState';
import styles from './Promoted.module.scss';

const Promoted = ({ promotedProducts }) => {

  return (
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
            <ProductSlider promotedProducts={promotedProducts} />
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
  )
};

Promoted.propTypes = {
  promotedProducts: PropTypes.array
}

export default Promoted;
