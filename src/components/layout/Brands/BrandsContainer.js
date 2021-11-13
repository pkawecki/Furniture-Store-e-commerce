import { connect } from 'react-redux';
import Brands from '../../layout/Brands/Brands';

import { getAllBrands } from '../../../redux/brandsRedux.js';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
});

export default connect(mapStateToProps)(Brands);
