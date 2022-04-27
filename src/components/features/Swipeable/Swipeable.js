import React from 'react';
import randomID from '@przemo41/randomid-generator';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

const Swipeable = ({ activePage, handlePageChange, pages }) => {
  return (
    <SwipeableViews
      animateTransitions
      enableMouseEvents
      index={activePage}
      onChangeIndex={index => {
        handlePageChange(index);
      }}
      slideStyle={{ overflow: 'hidden' }}
    >
      {pages.map(page => (
        <React.Fragment key={randomID(5)}>
          <div className='container'>
            <div className='row'>{page}</div>
          </div>
        </React.Fragment>
      ))}
    </SwipeableViews>
  );
};

Swipeable.propTypes = {
  activePage: PropTypes.number,
  handlePageChange: PropTypes.func,
  pages: PropTypes.array,
};
export default Swipeable;
