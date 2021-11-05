import { addProductToCompare, getAll, getCount } from '../../../redux/compareRedux';

import ProductBox from './ProductBox';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  compareList: getAll(state),
  compareCount: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: payload => dispatch(addProductToCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
