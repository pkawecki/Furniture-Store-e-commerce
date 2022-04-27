import {
  faBullhorn,
  faHeadphones,
  faReplyAll,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

import FeatureBox from '../../common/FeatureBox/FeatureBox';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './FeatureBoxes.module.scss';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row ${styles.rowOfFeatureBoxes}`}>
        <div className={`col-6 col-md-3 ${styles.featureCol}`}>
          <a href='#top'>
            <FeatureBox icon={faTruck}>
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </a>
        </div>
        <div className={`col-6 col-md-3 ${styles.featureCol}`}>
          <a href='#top'>
            <FeatureBox icon={faHeadphones}>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </a>
        </div>
        <div className={`col-6 col-md-3 ${styles.featureCol}`}>
          <NavLink to='#'>
            <FeatureBox icon={faReplyAll}>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </NavLink>
        </div>
        <div className={`col-6 col-md-3 ${styles.featureCol}`}>
          <NavLink to='#'>
            <FeatureBox icon={faBullhorn}>
              <h5>Member discount</h5>
              <p>First order</p>
            </FeatureBox>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
