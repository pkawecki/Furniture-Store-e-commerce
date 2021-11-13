import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BrandsSlider from '../../features/BrandsSlider/BrandsSlider';

const Brands = ({ brands }) => {
  const [brand] = useState(6);
  const [activePage, ActivePage] = useState(0);

  let newRwd = 0;
  const rwd = window.innerWidth;
  if (rwd >= 576 && rwd < 768) {
    newRwd = 4;
  } else if (rwd >= 0 && rwd < 576) {
    newRwd = 2;
  } else {
    newRwd = 6;
  }

  const leftAction = e => {
    e.preventDefault();

    ActivePage(activePage === 0 ? brands.length / brand - 1 : Math.ceil(brands.length / newRwd));
  };

  const rightAction = e => {
    e.preventDefault();

    ActivePage(activePage === brands.length / brand - 1 ? 0 : activePage + 1);
    // if(newActivePage === 0) {
    //   newActivePage++;
    // } else if (newActivePage >= pagesCount-1)
    // { newActivePage = 0;
    // } else if (newActivePage >= 0) {
    //   newActivePage++;
    // }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div
          className={
            'row no-gutters justify-content-between ' + styles.topnbottSliderWrapper
          }
        >
          <div className={`col-1`}>
            <Button className={styles.button} variant='carousel'  onClick={leftAction}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
          </div>
          <div className='col-10'>
            <div className='row justify-content-between'>
              {/* {brands.slice(newActivePage * newRwd, (newActivePage + 1) * newRwd).map(item => (
                <div key={item.id} className='col-2'> */}
              {brands.slice(activePage * newRwd, (activePage + 1) * newRwd).map(item => (
                <div key={item.id} className='col-2'>
                  <BrandsSlider {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className={`col-1`}>
            <Button className={styles.button} variant='carousel'  onClick={rightAction}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
