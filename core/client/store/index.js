import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import {
  browserHistory
} from 'react-router';

import {
  routerMiddleware,
  routerReducer
} from 'react-router-redux'

import { app } from './../reducers';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const logger = createLogger();

const storeWithThunk = applyMiddleware(
  thunk,
  logger,
  routerMiddleware(browserHistory)
  // window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const reducer = combineReducers({ app: app, routing: routerReducer });
const store = storeWithThunk(reducer);

export default store;