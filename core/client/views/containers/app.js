import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import PostList from './../components/PostList';
import Editor from './../components/Editor';
const { Component } = React;
import { setMarkdownChange } from './../../actions/editor';
import {
  fetchPost,
  updatePostList
} from './../../actions/app';

const onPostClick = (id) =>
  store.dispatch(fetchPost(id));

export default class App extends Component {
  render() {
    let editorProps = {
      mdvalue: store.getState().editor.mdValue,
      htmlValue: store.getState().editor.htmlValue,
      onMdChange: (mdVal) => {
        store.dispatch(setMarkdownChange(mdVal))
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