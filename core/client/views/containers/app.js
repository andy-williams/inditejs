import React from 'react';
const { Component } = React;
import { Provider } from 'react-redux';
const postUtils = require('./../../../shared/utils/post');

// todo: perhaps use some src dir relative technique for imports
import store from '../../store';
import PostList from './../components/postList';
import Preview from './../components/preview';
import { changeContent } from './../../actions/editor';
import {
  fetchPreviewPost,
  updatePostList
} from './../../actions/app';

// todo: sort this mess
const onPostClick = (id) =>
  store.dispatch(fetchPreviewPost(id));

export default class App extends Component {
  render() {
    const title = store.getState().app.preview.post.meta ? store.getState().app.preview.post.meta.title : '';
    const previewProps = {
      id: store.getState().app.preview.post.id,
      title: title ? title : store.getState().app.preview.post.slug,
      html: store.getState().app.preview.post.content,
      onEditClick: () => {} // nothing yet
    }
    return (
      <Provider store={store}>
        <div className="app-container">
          { PostList({ posts: store.getState().app.posts, onPostClick: onPostClick }) }
          { Preview(previewProps) }
        </div>
      </Provider>
    );
  }
}

store.dispatch(updatePostList());