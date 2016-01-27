import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import PostList from './../components/PostList';
import Editor from './../components/Editor';
const { Component } = React;
import { setMarkdownChange } from './../../actions/editor';
import { setOpenPost } from './../../actions/app';

const postListDummy = [
    {
      title: '111'
    },
    {
      title: '222'
    },
    {
      title: '333'
    }
];

const onPostClick = (post) => store.dispatch(setOpenPost(post));

export default class App extends Component {
  render() {
    let editorProps = {
      mdvalue: store.getState().editor.mdValue,
      htmlValue: store.getState().editor.htmlValue,
      onMdChange: (mdVal) => {
        store.dispatch(setMarkdownChange(mdVal))
      }
    };
    console.log(postListDummy);
    return (
      <Provider store={store}>
        <div className="app-container">
          { PostList({ posts: postListDummy, onPostClick: onPostClick }) }
          { Editor(editorProps) }
        </div>
      </Provider>
    );
  }
}