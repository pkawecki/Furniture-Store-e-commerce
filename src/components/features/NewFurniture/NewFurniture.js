import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductCompareBar from '../ProductCompareBar/ProductCompareBarContainer';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './NewFurniture.module.scss';
import Swipeable from '../Swipeable/Swipeable';

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

  render() {
    const {
      categories,
      products,
      mode,
      /*productsPage*/ addRating,
      subpage,
    } = this.props;
    const { activeCategory, activePage, activeFade } = this.state;
    let columnNumber;
    let productsPerPage;
    let styleMenu;

    switch (mode) {
      case 'mobile':
        columnNumber = 'col-6';
        productsPerPage = 1;
        break;
      case 'tablet':
        columnNumber = 'col-4';
        productsPerPage = 2;
        break;
      case 'desktop':
        columnNumber = 'col-3';
        productsPerPage = 8;
        break;
      default:
        productsPerPage = 4;
    }

    if (subpage === 'homePage') {
      columnNumber = 'col-lg-3 col-sm-6 mb-5';
      productsPerPage = 4;
      styleMenu = styles.panelBarDiv;
    } else if (subpage === 'pageShop') {
      columnNumber = 'col-lg-4 col-sm-6';
      productsPerPage = 12;
      styleMenu = styles.hiddenMenu;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

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
            <div key={item.id} className={columnNumber}>
              <ProductBox {...item} addRating={addRating} />
            </div>
          ))
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={'row no-gutters align-items-end ' + styleMenu}>
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
          <div
            className={`row ${styles.row} ${
              activeFade ? styles.fadeIn : styles.fadeOut
            }`}
          >
            <Swipeable
              activePage={activePage}
              handlePageChange={this.handlePageChange.bind(this)}
              pages={pages}
            />
          </div>
        </div>
        <ProductCompareBar />
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  //productsPage: PropTypes.string,
  subpage: PropTypes.string,
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
  addRating: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
