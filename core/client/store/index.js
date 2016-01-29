import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './../reducers';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
const logger = createLogger();

const storeWithThunk = applyMiddleware(
  thunk,
  logger
)(createStore);
const reducer = combineReducers(reducers);
const store = storeWithThunk(reducer);

export default store;