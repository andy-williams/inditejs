import React from 'react';
import { Provider } from 'react-redux';

// todo: perhaps use some src dir relative technique for imports
import store from '../../store';
import PostList from './../components/PostList';
import Editor from './../components/Editor';
const { Component } = React;
import { changeContent } from './../../actions/editor';
import {
  fetchPost,
  updatePostList
} from './../../actions/app';

// todo: sort this mess
const onPostClick = (id) =>
  store.dispatch(fetchPost(id));

export default class App extends Component {
  render() {
    let editorProps = {
      mdValue: store.getState().app.editor.mdValue,
      htmlValue: store.getState().app.editor.htmlValue,
      onMdChange: (mdVal) => {
        store.dispatch(changeContent(mdVal))
      }
    };
    return (
      <Provider store={store}>
        <div className="app-container">
          { PostList({ posts: store.getState().app.posts, onPostClick: onPostClick }) }
          { Editor(editorProps) }
        </div>
      </Provider>
    );
  }
}

store.dispatch(updatePostList());