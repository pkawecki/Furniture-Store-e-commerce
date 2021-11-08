import { getMode, updateMode } from '../../../redux/modeRedux';

import MainLayout from './MainLayout';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  mode: getMode(state),
});

const mapDispatchToProps = dispatch => ({
  updateMode: payload => dispatch(updateMode(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
