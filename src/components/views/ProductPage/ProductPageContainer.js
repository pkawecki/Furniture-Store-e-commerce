import { connect } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getById } from '../../../redux/productsRedux';
import ProductPage from './ProductPage';

const mapStateToProps = (state, componentProps) => {
  const valueObj = componentProps.match.params;
  const id = Object.values(valueObj)[0];
  const values = getById(state)(id);
  return { ...values };
  //   return { getByID: { ...values } };
};
//     return{
//   getFurnitureById: getById(state),
// });

export default connect(mapStateToProps, null)(ProductPage);
