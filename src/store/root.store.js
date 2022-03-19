import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore} from 'redux';
import createRootReducer from './root.reducer';
import rootEpic from './root.epics';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
    const epicMiddleware = createEpicMiddleware({
        dependencies: {}
    });

    const middlewares = [
        routerMiddleware(history),
        epicMiddleware
    ];

    const middlewareEnhancer = applyMiddleware(
        ...middlewares,
    );

    const enhancers = [ 
        middlewareEnhancer,
    ];

    const composedEnhancers = composeWithDevTools(
        ...enhancers,
    );

    const store = createStore(
        createRootReducer(history),
        initialState,
        composedEnhancers,
    );

    epicMiddleware.run(rootEpic);

    return store;
}
