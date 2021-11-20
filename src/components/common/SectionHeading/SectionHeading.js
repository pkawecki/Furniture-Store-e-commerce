import React, { useState } from 'react';

import PaginationDots from '../../common/PaginationDots/PaginationDots';
import PropTypes from 'prop-types';
import styles from './SectionHeading.module.scss';

const SectionHeading = ({
  title,
  pagesCount,
  categories,
  handlePageChange,
  handleCategoryChange,
  activeCategory,
  activePage,
}) => {
  function generateMenuButtons(inputArray = [], activeItem = null) {
    return (
      <div className={'col-md-9 col-sm-12 ' + styles.menu}>
        <ul>
          {inputArray.map(item => (
            <li key={item.id}>
              <a
                className={item.id === activeItem ? styles.active : null}
                onClick={() => handleCategoryChange(item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={'row no-gutters align-items-end'}>
        <div className={'col-9 d-flex ' + styles.titleWrapper}>
          <div className={'col-md-4 col-sm-12 ' + styles.title}>
            <h3>{title}</h3>
          </div>
          {generateMenuButtons(categories, activeCategory)}
        </div>
        <div className={styles.paginationWrapper}>
          <div className={'flex-shrink'}>
            <PaginationDots
              dotsCount={pagesCount}
              activeDot={activePage}
              handleChange={pageIndex => handlePageChange(pageIndex)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHeading.propTypes = {
  pagesCount: PropTypes.number,
  title: PropTypes.string,
  activePage: PropTypes.number,
  handleCategoryChange: PropTypes.func,
  handlePageChange: PropTypes.func,
  activeCategory: PropTypes.string,
  categories: PropTypes.array,
};

SectionHeading.defaultProps = {
  pagesCount: 1,
  activePage: 0,
  title: 'Default title',
  categories: [],
  activeCategory: 'Default category',
  handleCategoryChange: () => null,
  handlePageChange: () => null,
};

export default SectionHeading;
