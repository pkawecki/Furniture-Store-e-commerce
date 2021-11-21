import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => (
  <div className='container'>
    <div className='col-12'>
      <div className={'row ' + styles.NavBar}>
        <div>
          <NavLink to='/'>Home</NavLink>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faAngleRight} />
          </p>
        </div>
        <div>
          <a href='#' className={styles.active}>
            Furniture
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
