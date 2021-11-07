import React from 'react';
import PropTypes from 'prop-types';
import styles from '../BrandsSlider/BrandsSlider.module.scss';

const BrandsSlider = ({ name, image }) => {
  return (
    <div className={styles.photoBrands}>
      <img src={image} alt={name} />
    </div>
  );
};

BrandsSlider.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default BrandsSlider;
