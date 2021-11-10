import React from 'react';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6 '>
              <div className={styles.heading}>
                <h3>Furniture gallery</h3>
              </div>

              {/* Gallery tabs */}
              <div className={styles.menu}>
                <ul>
                  <li>
                    <span>Featured</span>
                  </li>
                  <li>
                    <span className={styles.active}>Top seller</span>
                  </li>
                  <li>
                    <span>Sale off</span>
                  </li>
                  <li>
                    <span>Top rated</span>
                  </li>
                </ul>
              </div>

              {/*Left side of the gallery*/}

              {/*Rating*/}
              <div className={styles.content}>
                <div className={styles.cornerTopLeft} />
                <h5>{products[0].name}</h5>
                <div className={styles.stars}>
                  <span>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  </span>
                </div>
                <div className={styles.cornerBottomRight} />
                <div className={styles.price}>
                  <h3>${products[0].price}</h3>
                  <h3>
                    <s>${products[0].oldPrice}</s>
                  </h3>
                </div>
              </div>

              {/*Slider*/}

              {/*Right side of the gallery*/}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
};

export default Gallery;