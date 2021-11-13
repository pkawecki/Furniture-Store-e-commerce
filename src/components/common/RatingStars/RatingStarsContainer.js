import { connect } from 'react-redux';
import { addRating } from '../../../redux/productsRedux.js';
import RatingStars from './RatingStars.js';

const mapDispatcherToProps = dispatcher => ({
  addRating: (userRating, id) =>
    dispatcher(addRating({ id: id, userRating: userRating })),
});

export default connect(null, mapDispatcherToProps)(RatingStars);
