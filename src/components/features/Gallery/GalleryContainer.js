import { connect } from 'react-redux';
import Gallery from './Gallery.js';
import { getAllProducts } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

export default connect(mapStateToProps)(Gallery);