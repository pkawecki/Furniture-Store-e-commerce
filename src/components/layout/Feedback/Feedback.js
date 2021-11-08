import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  render() {
    const { activePage } = this.state;
    const { feedbacks } = this.props;
    const pagesCount = Math.ceil(feedbacks.length);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          {/* eslint-disable-next-line */}
          <a className={i === activePage ? styles.active : ''}>page {i}</a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className='col'></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          </div>
          <div className={styles.quoteArea}>
            {feedbacks.slice(activePage, activePage + 1).map(feed => (
              <div key={feed.id} className='col text-center'>
                <div className='row justify-content-md-center'>
                  <p className={styles.quoteBox}>{feed.clientText}</p>
                </div>
                <div className='row justify-content-md-center'>
                  <div className='col col-lg-1'>
                    <img
                      src={feed.clientImage}
                      width='60'
                      height='60'
                      alt='client avatar'
                    />
                  </div>
                  <div className='col col-lg-2'>
                    <h6>{feed.clientName}</h6>
                    <p>Satisfied Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  children: PropTypes.node,
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      clientName: PropTypes.string,
      clientText: PropTypes.string,
      clientImage: PropTypes.string,
    })
  ),
};

Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;
