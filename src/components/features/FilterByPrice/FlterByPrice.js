import React from 'react';
import styles from './FilterByPrice.module.scss';

const FilterByPrice = () => (
  <div className={styles.root}>
    <div className={styles.byPrice}>
      <h4>FILTER BY PRICE</h4>
      <div className={`row ${styles.range}`}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
        <div className={styles.circleMiddle}></div>
        <div className={styles.lineTransparent}></div>
      </div>
      <div className={`row ${styles.price}`}>
        <button className={styles.filter}>FILTER</button>
        <div className={styles.prices}>$0 - $3000</div>
      </div>
    </div>
  </div>
);

export default FilterByPrice;
