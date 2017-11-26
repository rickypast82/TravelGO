import reducers from '../reducers';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // options
});

const store = createStore(
  reducers,
  applyMiddleware(logger)
);


export default store;

