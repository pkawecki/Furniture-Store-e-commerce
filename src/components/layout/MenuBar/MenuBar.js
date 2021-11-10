import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.wrapper}>
          <div className={'col ' + styles.search}>
            <ProductSearch />
          </div>
          <div className={'col ' + styles.menu + (open ? ' ' + styles.activeMenu : '')}>
            <ul>
              <li>
                <a href='/home' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='/shop/furniture'>Furniture</a>
              </li>
              <li>
                <a href='/shop/chair'>Chair</a>
              </li>
              <li>
                <a href='/shop/table'>Table</a>
              </li>
              <li>
                <a href='/shop/sofa'>Sofa</a>
              </li>
              <li>
                <a href='/shop/bedroom'>Bedroom</a>
              </li>
              <li>
                <a href='/blog'>Blog</a>
              </li>
            </ul>
          </div>
          <a href='#top' className={styles.dropdown} onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
