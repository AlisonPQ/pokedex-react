import { connect } from 'react-redux';
import { creators } from '../store/app-info/app-info.actions';

import App from './App';

const mapStateToProps = ({
    description,
}) => ({
    description
});

const mapActionsToProps = {
    getAppInfo: creators.attempted,
};

export default connect(
    mapStateToProps,
    mapActionsToProps,
)(App);
