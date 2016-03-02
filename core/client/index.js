import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { updatePostList } from './actions/app';

// containers
import App from './views/containers/app';
import PostListPreview from './views/containers/post-list-preview';
import { PostEditRouteHandler } from './views/containers/post-edit';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PostListPreview} />
        <Route path="/:postId" component={PostEditRouteHandler} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-container')
);

// init dispatch
store.dispatch(updatePostList());
