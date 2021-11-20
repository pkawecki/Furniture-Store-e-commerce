import React from 'react';
import styles from './ToggleButton.module.scss';

const ToggleButton = () => {
  return (
    <label className={styles.switch}>
      <input type='checkbox' />
      <span className={styles.slider + ' ' + styles.round}></span>
    </label>
  );
};

export default ToggleButton;
