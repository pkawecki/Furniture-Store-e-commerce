import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => (
  <div className='container'>
    <div className={'col-12 ' + styles.root}>
      <div className='row '>
        <div className={'col-12 ' + styles.title}>
          <p>
            BEDROOM <span>FURNITURE</span>
          </p>
        </div>
        <div className={'col-12 ' + styles.subtitle}>
          <p>
            ALWAYS <span>25% </span> OFF OR MORE
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
