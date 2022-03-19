import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appInfoReducer from './app-info/app-info.reducer';


const appReducer = (history) => combineReducers({
    router: connectRouter(history),
    appInfo: appInfoReducer,
});

const createRootReducer = (history) => (state, action) => {
    return appReducer(history)(state, action);
};

export default createRootReducer;
