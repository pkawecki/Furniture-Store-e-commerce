import React from 'react';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faHeart, faExchangeAlt, faEye, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import ReactTooltip from 'react-tooltip';
import initialState from '../../../redux/initialState';
class Gallery extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'topSeller',
    activeFade: false,
  };

  handleCategoryChange(newCategory) {
    this.setState({
      activeCategory: newCategory,
      activeFade: true,
    });
    if (this.state.activeFade === false) {
      setTimeout(
        function() {
          this.setState({ activeFade: false });
        }.bind(this),
        1000
      );
    }
  }

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
      activeFade: true,
    });
    if (this.state.activeFade === false) {
      setTimeout(
        function() {
          this.setState({ activeFade: false });
        }.bind(this),
        1000
      );
    }
  }

  next = event => {
    event.preventDefault();
    this.slider.slickNext();
    this.pause();
  };

  render() {
    const { products} = this.props;
    const { activeCategory } = this.state;
    const categories = [
      { id: 'featured', name: 'FEATURED' },
      { id: 'topSeller', name: 'TOP SELLER' },
      { id: 'saleOff', name: 'SALE OFF' },
      { id: 'topRated', name: 'TOP RATED' },
    ];
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6 '>
              <div className={styles.heading}>
                <h3>Furniture gallery</h3>
              </div>

              {/* Gallery tabs */}
              <div className={styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      {/* eslint-disable-next-line */}
                      <span
                        className={
                          item.id === activeCategory ? styles.active : undefined
                        }
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/*Left side of the gallery*/}
              <div className={styles.product}>
                <img
                  src={initialState.products[0].image}
                  alt='product-1'
                />
                <div className={styles.buttons}>
                  <Button data-for='btn' data-tip='Add to favorites' variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faHeart}>Add to favorites</FontAwesomeIcon>
                  </Button>
                  <ReactTooltip id='btn' place='right' getContent={(dataTip) => `${dataTip}`}/>

                  <Button data-for='btn' data-tip='Add to compare' variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                  </Button>
                  <ReactTooltip id='btn' place='right' getContent={(dataTip) => `${dataTip}`}/>

                  <Button data-for='btn' data-tip='View details' variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faEye}>View details</FontAwesomeIcon>
                  </Button>
                  <ReactTooltip id='btn' place='right' getContent={(dataTip) => `${dataTip}`}/>

                  <Button data-for='btn' data-tip='Add to basket' variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faShoppingBasket}>Add to basket</FontAwesomeIcon>
                  </Button>
                  <ReactTooltip id='btn' place='right' getContent={(dataTip) => `${dataTip}`}/>
                </div>

                {/*Rating*/}
                <div className={styles.content}>
                  <div className={styles.cornerTopLeft} />
                  <h5>{products[0].name}</h5>
                  <div className={styles.stars}>
                    <span>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className={styles.cornerBottomRight} />
                  <div className={styles.price}>
                    <h3>${products[0].price}</h3>
                    <h3>
                      <s>${products[0].oldPrice}</s>
                    </h3>
                  </div>
                </div>
              </div>

              {/*Slider*/}
              <div className={styles.slider}>
                <div className={styles.preview}>
                  <p>{'<'}</p>
                </div>
                <div className={styles.thumbnails}>
                  {products.slice(0, 6).map((product, index) => (
                    <div key={product.id}>
                      <img
                        src={initialState.products[2].image}
                        alt=''
                        className={
                          index === 0
                            ? styles.thumbnail + ' ' + styles.active
                            : styles.thumbnail
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.next}>
                  <Button variant='carousel' onClick={this.next}>{'>'}</Button>
                </div>
              </div>
            </div>

            {/*Right side of the gallery*/}
            <div className={'col-6 ' + styles.picture}>
              <img
                src={initialState.products[3].image}
                alt='product-3'
              />
              <div className={styles.details}>
                <h3>
                  from <span>$ {products[3].price}</span>
                </h3>
                <h1>{products[3].name}</h1>
                <Button variant='greenBtn'>SHOP NOW</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      oldPrice: PropTypes.number,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
Gallery.defaultProps = {
  categories: [],
  products: [],
};

export default Gallery;