import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

import style from './ProductPopup.module.scss';

const ProductPopup = props => (
  <div className={style.popup}>
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
          <div className={style.popupProductName}>
            <h3>{props.name}</h3>
          </div>
          <div className={style.popupDescription}>
            <p>
              CATEGORY: <span>{props.category}</span>
            </p>
            <p>
              DESCRIPTION: <span>Lorem Ipsum</span>
            </p>
            <p>
              SIZE: <span>xx-xx-xx</span>
            </p>
            <p>
              OTHER: <span>Lorem Ipsum</span>
            </p>
          </div>
          <div className={style.popupProductPrice}>
            <Button variant='small'>$ {props.price}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductPopup.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  category: PropTypes.string,
  closePopup: PropTypes.func,
};

export default ProductPopup;
