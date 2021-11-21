import React from 'react';
import styles from './Promotions.module.scss';
import initialState from '../../../redux/initialState';

const Promotions = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-lg-6 col-sm-12'}>
            <div className={styles.imgLeft}>
              <img src={initialState.products[1].image} alt='promotions sofa' />
              <div className={'col' + styles.col}>
                <div className={styles.contentWrapperLeft}>
                  <p>
                    GUEST ROOM <br /> <span>SOFA</span>
                  </p>
                  <p>-20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-lg-6 col-sm-12'}>
            <div className={'col' + styles.col}>
              <div>
                <div className={styles.imgRight}>
                  <img src={initialState.chairs[0].image} alt='promotions chair' />
                  <div className={styles.contentWrapperRightUp}>
                    <p>
                      <span>OFFICE</span> CHAIR <br />
                      COLLECTION
                    </p>
                    <p>$200.00</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.imgRight}>
                  <img
                    src={initialState.products[5].image}
                    alt='promotions special collection'
                  />
                  <div className={styles.contentWrapperRightDown}>
                    <p>
                      <span>SPECIAL</span> COLLECTION
                    </p>
                    <p>SAVE UP 45% OF FURNITURE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
