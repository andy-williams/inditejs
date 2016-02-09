import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './views/containers/app';
import store from './store';
import { updatePostList } from './actions/app';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);

store.dispatch(updatePostList());

//store.subscribe(render);
//render();