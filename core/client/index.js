import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { updatePostList } from './actions/app';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import PostListPreview from './views/containers/post-list-preview';
import PostEdit from './views/containers/post-edit';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={PostListPreview} />
        <Route path="/:postId" component={PostEdit} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-container')
);

store.dispatch(updatePostList());

//store.subscribe(render);
//render();