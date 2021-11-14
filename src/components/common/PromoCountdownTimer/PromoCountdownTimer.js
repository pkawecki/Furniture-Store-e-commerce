import PropTypes from 'prop-types';
import React from 'react';
import styles from './PromoCountdownTimer.module.scss';

const PromoCountdownTimer = ({ isShown, isHovered }) => {
  let content = null;
  if (isShown) {
    content = (
      <div className={styles.timer}>
        <div className='row justify-content-around'>
          <div className={'col-3 ' + styles.timerItem}>
            <div className={styles.number}>
              <span>25</span>
            </div>
            <div className={styles.unit}>
              <span>DAYS</span>
            </div>
          </div>
          <div className={'col-3 ' + styles.timerItem}>
            <div className={styles.number}>
              <span>10</span>
            </div>
            <div className={styles.unit}>
              <span>HRS</span>
            </div>
          </div>
          <div className={'col-3 ' + styles.timerItem}>
            <div className={styles.number}>
              <span>45</span>
            </div>
            <div className={styles.unit}>
              <span>MIN</span>
            </div>
          </div>
          <div className={'col-3 ' + styles.timerItem}>
            <div className={styles.number}>
              <span>30</span>
            </div>
            <div className={styles.unit}>
              <span>SECS</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return content;
};

PromoCountdownTimer.propTypes = {
  isShown: PropTypes.bool,
  isHovered: PropTypes.func,
};

export default PromoCountdownTimer;
