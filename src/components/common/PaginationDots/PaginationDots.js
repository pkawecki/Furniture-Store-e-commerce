import PropTypes from 'prop-types';
import React from 'react';
import styles from './PaginationDots.module.scss';

const PaginationDots = ({ dotsCount = 0 }) => {
  function generateDotsList(dotsNum) {
    let dotsList = [];
    for (let i = 0; i < dotsNum; i++) {
      dotsList.push(
        <li key={i}>
          {/* eslint-disable-next-line */}
          <a
          /* onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined} */
          >
            page {i}
          </a>
        </li>
      );
    }
    return dotsList;
  }

  return (
    <div className={styles.root}>
      <ul>{generateDotsList(dotsCount)}</ul>
    </div>
  );
};

PaginationDots.propTypes = {
  dotsCount: PropTypes.number,
  handlePageChange: PropTypes.func,
};

export default PaginationDots;
