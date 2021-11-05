import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <a href='#top' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='#top'>Furniture</a>
            </li>
            <li>
              <a href='#top'>Chair</a>
            </li>
            <li>
              <a href='#top'>Table</a>
            </li>
            <li>
              <a href='#top'>Sofa</a>
            </li>
            <li>
              <a href='#top'>Bedroom</a>
            </li>
            <li>
              <a href='#top'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
