import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductCompareBar from '../ProductCompareBar/ProductCompareBarContainer';
import PropTypes from 'prop-types';
import React from 'react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import SwipeableViews from 'react-swipeable-views';
import styles from './NewFurniture.module.scss';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    activeFade: false,
  };

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

  handleCategoryChange(newActiveCategory) {
    this.setState({
      activeCategory: newActiveCategory,
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

  render() {
    const { categories, products, mode } = this.props;
    const { activeCategory, activePage, activeFade } = this.state;
    let productsPerPage;

    switch (mode) {
      case 'mobile':
        productsPerPage = 1;
        break;
      case 'tablet':
        productsPerPage = 2;
        break;
      case 'desktop':
        productsPerPage = 8;
        break;
      default:
        productsPerPage = 4;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

    return (
      <div className={styles.root}>
        <div className='container'>
          <SectionHeading
            title={'New furniture'}
            pagesCount={pagesCount}
            buttonsData={categories}
            handleChange={activeCategory => this.handleCategoryChange(activeCategory)}
            activeButton={activeCategory}
          />
          <SwipeableViews
            enableMouseEvents
            index={activePage}
            onChangeIndex={index => {
              this.handlePageChange(index);
            }}
            slideStyle={{ overflow: 'hidden' }}
          >
            <div className={`row ${activeFade ? styles.fadeIn : styles.fadeOut}`}>
              {categoryProducts
                .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
                .map(item => (
                  <div key={item.id} className='col-lg-3 col-sm-6 mb-5'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </SwipeableViews>
        </div>
        <ProductCompareBar />
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  mode: PropTypes.string,
  activeFade: PropTypes.bool,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
