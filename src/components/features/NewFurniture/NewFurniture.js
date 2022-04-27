import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductCompareBar from '../ProductCompareBar/ProductCompareBarContainer';
import PropTypes from 'prop-types';
import React from 'react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import styles from './NewFurniture.module.scss';
import Swipeable from '../Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
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
    console.log('Category change to:', newCategory);
    this.setState({
      activeFade: true,
    });

    setTimeout(() => {
      this.setState({
        activeCategory: newCategory,
      });
    }, 500);

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
    const { categories, products, mode, subpage } = this.props;
    const { activeCategory, activePage } = this.state;
    /* eslint-disable  */
    let columnNumber = 0;
    let productsPerPage;

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
    } else if (subpage === 'pageShop') {
      columnNumber = 'col-lg-4 col-sm-6';
      productsPerPage = 12;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);
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
          <SectionHeading
            title={'New furniture'}
            pagesCount={pagesCount}
            categories={categories}
            // handleCategoryChange={activeCategory => this.setState({ activeCategory })}
            handleCategoryChange={activeCategory =>
              this.handleCategoryChange(activeCategory)
            }
            // handlePageChange={activePage => this.handleClick()}
            handlePageChange={activePage => this.setState({ activePage })}
            activeCategory={activeCategory}
            activePage={activePage}
            subpage={subpage}
          />
          <Swipeable
            activePage={activePage}
            handlePageChange={activePage => this.setState({ activePage })}
            pages={pages}
          />
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
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
