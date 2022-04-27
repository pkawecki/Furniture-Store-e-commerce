import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux';
import ProductPage from './ProductPage';

const mapStateToProps = (state, componentProps) => {
  const valueObj = componentProps.match.params;
  const id = Object.values(valueObj)[0];
  const values = getById(state)(id);
  return { ...values };
};

export default connect(mapStateToProps, null)(ProductPage);
