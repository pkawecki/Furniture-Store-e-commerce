import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

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
            <li>
              <a href='#'>furniture</a>
            </li>
            <li>
              <a href='#'>chair</a>
            </li>
            <li>
              <a href='#'>table</a>
            </li>
            <li>
              <a href='#'>sofa</a>
            </li>
            <li>
              <a href='#'>bedroom</a>
              <ul>
                <li>
                  <a href='#'>bed</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
