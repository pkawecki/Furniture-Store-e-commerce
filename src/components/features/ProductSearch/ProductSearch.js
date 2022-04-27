import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <div className={styles.dropdown}>
        <div className={styles.dropdownContainer}>
          <span>select category</span>
        </div>
        <div className={styles.dropdownContent}>
          <ul>
            {}
            <li>
              <NavLink to='/category/furniture'>furniture</NavLink>
            </li>
            <li>
              <NavLink to='/category/chair'>chair</NavLink>
            </li>
            <li>
              <NavLink to='/category/table'>table</NavLink>
            </li>
            <li>
              <NavLink to='/category/sofa'>sofa</NavLink>
            </li>
            <li>
              <NavLink to='/category/bed'>bed</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <a href='/search'>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </a>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
