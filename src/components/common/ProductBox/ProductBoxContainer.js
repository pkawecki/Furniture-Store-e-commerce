import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAll,
  createAction_addFavorites,
  createAction_removeFavorites,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: productId => dispatch(createAction_addFavorites(productId)),
  removeFromFavorites: productId => dispatch(createAction_removeFavorites(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
