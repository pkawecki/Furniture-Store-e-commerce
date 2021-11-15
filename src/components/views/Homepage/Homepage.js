import Brands from '../../layout/Brands/BrandsContainer';
import Chatbox from '../../features/Chatbox/Chatbox';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promoted from '../../features/Promoted/Promoted';
import React from 'react';
import styles from './Homepage.module.scss';
import Promotions from '../../features/Promotions/Promotions';
import BlogHomepage from '../../layout/BlogHomepage/BlogHomepage';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <BlogHomepage />
    <Feedback />
    <Chatbox />
  </div>
);

export default Homepage;
