import Promoted from './Promoted';
import { connect } from 'react-redux';
import { getPromoted } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  promotedProducts: getPromoted(state),
});

export default connect(mapStateToProps)(Promoted);
