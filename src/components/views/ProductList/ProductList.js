import Brands from '../../layout/Brands/BrandsContainer';
import React from 'react';
import FilterByPrice from '../../features/FilterByPrice/FlterByPrice';
// import PropTypes from 'prop-types';
import FilterByColor from '../../features/FilterByColor/FilterByColor';
import styles from './ProductList.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.banner}>
            <span>BANNER</span>
          </div>
        </div>
        <div className='col-9'>
          <div className={styles.productList}>
            <NewFurniture subpage='pageShop' />
          </div>
        </div>
        <div className='col-3'>
          <div className={styles.filters}>
            <span>Filters</span>
            <div className='col-12'>
              <FilterByPrice />
            </div>  
            <div className='col-12'>
              <FilterByColor />
            </div>
          </div>
        </div>
        <div className='col-12'>
          <Brands />
        </div>
      </div>
    </div>
  </div>
);

export default ProductList;
