import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promoted from '../../features/Promoted/Promoted';
import Brands from '../../layout/Brands/BrandsContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import Promotions from '../../features/Promotions/Promotions';
import BlogHomepage from '../../layout/BlogHomepage/BlogHomepage';
import Gallery from '../../features/Gallery/GalleryContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <BlogHomepage />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

export default Homepage;
