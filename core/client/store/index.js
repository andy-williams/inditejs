import { createStore, combineReducers, applyMiddleware } from 'redux';
import { app }from './../reducers';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
const logger = createLogger();

const storeWithThunk = applyMiddleware(
  thunk,
  logger
)(createStore);
const reducer = combineReducers({ app: app });
const store = storeWithThunk(reducer);

export default store;