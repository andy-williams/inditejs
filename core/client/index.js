import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { render } from 'react-dom';
import React from 'react';
import store from './store';

// containers
import App from './views/containers/app';
import PostListPreviewContainer from './views/containers/post-list-preview';
import PostPreviewContainer from './views/containers/post-preview';
import { PostEditRouteHandler } from './views/containers/post-edit';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={PostListPreviewContainer}>
          <Route path="preview/:postId" component={PostPreviewContainer} />
        </Route>
        <Route path="edit/:postId" component={PostEditRouteHandler} />
        <Route path="add/:postId" component={PostEditRouteHandler} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-container')
);

// init dispatch
import { updatePostList } from './actions/app';
store.dispatch(updatePostList());
