import ProductBox from '../../common/ProductBox/ProductBox';
import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className={'row no-gutters align-items-end'}>
            <div className={'col-auto ' + styles.heading}>
              <h3>SEARCH RESULT</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a href='#'></a>
                </li>
                <li>
                  <a href='#'></a>
                </li>
                <li>
                  <a href='#'></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={'row ' + styles.productsSearch}>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <ProductBox />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <ProductBox />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <ProductBox />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <ProductBox />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <ProductBox />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <ProductBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
