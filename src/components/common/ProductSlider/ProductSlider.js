import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '../Button/Button';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import PromoCountdownTimer from '../PromoCountdownTimer/PromoCountdownTimer';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import styles from './ProductSlider.module.scss';

class ProductSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        fade: true,
        dotsClass: `slick-dots ${styles.customdots}`,
        afterChange: index => {
          const activeDot = document.querySelectorAll('.slick-dots > li')[index];
          activeDot.classList.add(styles.customdots__active);
          activeDot.classList.remove(`slick-active`);
        },
      },
    };
  }

  static propTypes = {
    settings: PropTypes.object,
    promotedProducts: PropTypes.array,
  };

  pause = () => {
    this.slider.slickPause();
    setTimeout(() => {
      this.slider.slickPlay();
    }, this.props.settings.pauseTime);
  };

  next = event => {
    event.preventDefault();
    this.slider.slickNext();
  };

  prev = event => {
    event.preventDefault();
    this.slider.slickPrev();
  };

  render() {
    const { settings, promotedProducts } = this.props;
    if (promotedProducts) {
      return (
        <div onClick={() => this.pause()}>
          <div className={styles.customdots__bg} />
          <Slider
            ref={slider => (this.slider = slider)}
            {...this.state.settings}
            {...settings}
          >
            {promotedProducts.map(product => (
              <div key={product.id}>
                {settings.promoCountdown ? <PromoCountdownTimer /> : null}
                <ProductBox {...product} />
              </div>
            ))}
          </Slider>
          <div className={settings.arrowButtons ? '' : 'd-none'}>
            <div className={styles.shadowWrapper}></div>
            <div className={styles.shadowTitle}>
              INDOOR <span>FURNITURE</span>
              <div className={styles.shadowSubtitle}>
                SAVE UP TO 50% OF ALL FURNITURE
              </div>
            </div>
            <div className={styles.centerButton}>
              <Button variant='big'>SHOP NOW</Button>
            </div>
            <div className={styles.shadowButtonsWrapper}>
              <div className='row'>
                <div className={styles.buttonLong}>
                  <Button onClick={this.prev} variant='long'>
                    {'<'}
                  </Button>
                </div>
                <div className={styles.buttonLong}>
                  <Button onClick={this.next} variant='long'>
                    {'>'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductSlider;
