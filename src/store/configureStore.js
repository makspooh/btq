import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import reducers                         from '../reducers';

function bindMiddleware(middleware) {
    return applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        bindMiddleware([ thunkMiddleware ])
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
