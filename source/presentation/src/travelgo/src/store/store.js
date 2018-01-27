import reducers from '../modules/reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable';
import { responsiveStoreEnhancer } from 'redux-responsive';

//Logger middleware
const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

const loggerMiddleware = createLogger({
  stateTransformer,
});

export const isProduction = () => (process.env.NODE_ENV === 'production');

export const composeEnhancer = (production=isProduction()) => 
    production
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer()(
    responsiveStoreEnhancer,
    applyMiddleware(
        loggerMiddleware,
    )
);


//store
const store = createStore(reducers, enhancer);


export default store;

