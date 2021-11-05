import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#top'>About us</a>
                </li>
                <li>
                  <a href='#top'>Policy</a>
                </li>
                <li>
                  <a href='#top'>Conditions</a>
                </li>
                <li>
                  <a href='#top'>Online support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <a href='#top'>Login</a>
                </li>
                <li>
                  <a href='#top'>My cart</a>
                </li>
                <li>
                  <a href='#top'>Wishlist</a>
                </li>
                <li>
                  <a href='#top'>Checkout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#top'>Specials</a>
                </li>
                <li>
                  <a href='#top'>New products</a>
                </li>
                <li>
                  <a href='#top'>Best Sellers</a>
                </li>
                <li>
                  <a href='#top'>Out Stores</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className={styles.menuWrapper}>
              <h6>Orders</h6>
              <ul>
                <li>
                  <a href='#top'>Payment options</a>
                </li>
                <li>
                  <a href='#top'>Shipping and delivery</a>
                </li>
                <li>
                  <a href='#top'>Returns</a>
                </li>
                <li>
                  <a href='#top'>Shipping</a>
                </li>
              </ul>
            </div>
            <img src='./images/cards.png' alt='Supported credit cards' />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col'></div>
          <div className={'col text-center ' + styles.copyright}>
            <p>©Copyright 2016 Bazar | All Rights Reserved</p>
          </div>
          <div className={'col text-right ' + styles.socialMedia}>
            <ul>
              <li>
                <a href='#top'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#top'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#top'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#top'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#top'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#top'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
