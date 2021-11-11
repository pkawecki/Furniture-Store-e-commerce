import ProductSlider from '../../common/ProductSlider/ProductSlider';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Promoted.module.scss';

class Promoted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        sliderLeft: {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseTime: 10000,
          arrowButtons: false,
          promoCountdown: true,
        },
        sliderRight: {
          dots: false,
          autoplay: false,
          pauseTime: 0,
          arrowButtons: true,
          promoCountdown: false,
        },
      },
    };
  }

  static propTypes = {
    promotedProducts: PropTypes.array,
  };

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-4 ' + styles.left}>
              <div className={styles.topper}>
                <div className={'col-auto ' + styles.hotDeals}>
                  <h3>HOT DEALS</h3>
                </div>
              </div>
              <ProductSlider
                promotedProducts={this.props.promotedProducts}
                settings={this.state.settings.sliderLeft}
              />
            </div>
            <div className={'col-8 ' + styles.right}>
              <ProductSlider
                promotedProducts={this.props.promotedProducts}
                settings={this.state.settings.sliderRight}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promoted;
