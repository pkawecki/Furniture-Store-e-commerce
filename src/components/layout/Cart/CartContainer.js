import Cart from './Cart';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartProducts: getAll(state),
});

export default connect(mapStateToProps)(Cart);
