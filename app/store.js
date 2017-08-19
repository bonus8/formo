import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from 'reducer';


let store;

if(process.env.NODE_ENV === 'production') {
    store = createStore(
        reducer
    );
} else {
    store = createStore(
        reducer,
        applyMiddleware(createLogger())
    );
}

export default store;
