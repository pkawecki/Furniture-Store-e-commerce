import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

import style from './ProductPopup.module.scss';

const ProductPopup = props => (
  <div className={style.popup}>
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className={style.popupPhoto}>
            <div className={style.close}>
              <Button variant='close' onClick={props.closePopup}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </Button>
            </div>
            <img alt={props.name} src={props.image}></img>
          </div>
        </div>
        <div className='col-6'>
          <div className={style.popupProduct}>
            <p>Nazwa: {props.name}</p>
            <p>Cena: {props.price}</p>
            <p>Old Price: {props.oldPrice}</p>
            <p>Kategoria: {props.category}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductPopup.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  closePopup: PropTypes.func,
};

export default ProductPopup;
