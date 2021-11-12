import Brands from '../../layout/Brands/BrandsContainer';
import Chatbox from '../../features/Chatbox/Chatbox';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promoted from '../../features/Promoted/Promoted';
import Promotions from '../../features/Promotions/Promotions';
import React from 'react';
import styles from './Homepage.module.scss';
// import PropTypes from 'prop-types';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Brands />
    <Feedback />
    <Chatbox />
  </div>
);

export default Homepage;
