import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductCompareBar from '../ProductCompareBar/ProductCompareBarContainer';
import PropTypes from 'prop-types';
import React from 'react';
<<<<<<< HEAD
import styles from './NewFurniture.module.scss';

import Swipeable from '../Swipeable/Swipeable';
=======
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import SwipeableViews from 'react-swipeable-views';
import styles from './NewFurniture.module.scss';
>>>>>>> ceebde9 (Fix css bugs in PC mode)

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
    this.handleFade(this.state.activeFade);
  }

  handleCategoryChange(newActiveCategory) {
    this.setState({
      activeCategory: newActiveCategory,
      activeFade: true,
    });
    this.handleFade(this.state.activeFade);
  }

  handleFade(isFadeActive) {
    if (!isFadeActive) {
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

<<<<<<< HEAD
    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          {/* eslint-disable-next-line */}
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        categoryProducts
          .slice(i * productsPerPage, (i + 1) * productsPerPage)
          .map(item => (
            <div key={item.id} className='col-lg-3 col-sm-6'>
              <ProductBox {...item} />
            </div>
          ))
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={'row no-gutters align-items-end ' + styles.panelBarDiv}>
              <div className={'col-md-3 col-sm-12 ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      {/* eslint-disable-next-line */}
                      <a
                        className={
                          item.id === activeCategory ? styles.active : undefined
                        }
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <Swipeable
            activePage={activePage}
            handlePageChange={this.handlePageChange.bind(this)}
            pages={pages}
          />
=======
=======
    return (
      <div className={styles.root}>
        <div className='container'>
          <SectionHeading
            title={'New furniture'}
            pagesCount={pagesCount}
            buttonsData={categories}
            handleCategoryChange={activeCategory =>
              this.handleCategoryChange(activeCategory)
            }
            handleChange={activePage => this.handlePageChange(activePage)}
            activeButton={activeCategory}
          />
>>>>>>> ceebde9 (Fix css bugs in PC mode)
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
>>>>>>> 12a4bfa (Add animation to change category & page)
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
