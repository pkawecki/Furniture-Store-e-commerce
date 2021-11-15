import React from 'react';
import styles from './Banner.module.scss';
import initialState from '../../../redux/initialState';

const Banner = () => (
  <div className='container'>
    <div className={'col-12 ' + styles.root}>
      <div className='row '>
        <div className={'col-12 ' + styles.title}>
          <p>
            {initialState.banner.title} <span> {initialState.banner.titleBold}</span>
          </p>
        </div>
        <div className={'col-12 ' + styles.subtitle}>
          <p>
            {initialState.banner.subtitle}{' '}
            <span>{initialState.banner.subtitleColor} </span>{' '}
            {initialState.banner.subtitleAfterColor}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
