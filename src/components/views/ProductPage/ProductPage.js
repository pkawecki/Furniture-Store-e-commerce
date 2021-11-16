import React from 'react';
import Banner from '../../features/Banner/Banner';
import Chatbox from '../../features/Chatbox/Chatbox';
import NavBar from '../../features/NavBar/NavBar';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const ProductPage = () => (
  <div className={styles.root}>
    <Chatbox />
    <Banner />
    <NavBar />
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
