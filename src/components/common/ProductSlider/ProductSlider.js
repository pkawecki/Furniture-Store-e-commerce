import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProductBox from '../../common/ProductBox/ProductBoxContainer'
import React from 'react';
import Slider from 'react-slick';
import styles from './ProductSlider.module.scss'

export default function ProductSlider({ promotedProducts }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => <ul id='xyz'>{dots}</ul>,
  };

  return (
    <Slider {...settings}>
      {promotedProducts.map(product =>
      <div>
          {/* <PromoCountdownTimer /> */}
        <ProductBox key={product.id} {...product} />
      </div>
      )}
    </Slider>
  );
}
