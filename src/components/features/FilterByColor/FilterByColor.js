import React from 'react';
import styles from './FilterByColor.module.scss';

const FilterByColor = () => (
  <div className={styles.root}>
    <div className={styles.byColor}>
      <h4>FILTER BY COLOR</h4>
      <div className={'row ' + styles.colorLine + ' ' + styles.active}>
        <div className={styles.red}></div>
        <div className={styles.category}>Red</div>
      </div>
      <div className={'row ' + styles.colorLine}>
        <div className={styles.black}></div>
        <div className={styles.category}>Black</div>
      </div>
      <div className={'row ' + styles.colorLine}>
        <div className={styles.yellow}></div>
        <div className={styles.category}>Yellow</div>
      </div>
      <div className={'row ' + styles.colorLine}>
        <div className={styles.blue}></div>
        <div className={styles.category}>Blue</div>
      </div>
      <div className={'row ' + styles.colorLine}>
        <div className={styles.pink}></div>
        <div className={styles.category}>Pink</div>
      </div>
      <div className={'row ' + styles.colorLine}>
        <div className={styles.green}></div>
        <div className={styles.category}>Green</div>
      </div>
    </div>
  </div>
);

export default FilterByColor;
