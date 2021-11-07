import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAll,
  createAction_addFavorites,
  createAction_removeFavorites,
} from '../../../redux/productsRedux';
import { addProductToCompare, getAll, getCount } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  compareList: getAll(state),
  compareCount: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: productId => dispatch(createAction_addFavorites(productId)),
  removeFromFavorites: productId => dispatch(createAction_removeFavorites(productId)),
  addToCompare: payload => dispatch(addProductToCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
