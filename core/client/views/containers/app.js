import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import PostList from './../components/PostList';
import Editor from './../components/Editor';
const { Component } = React;
import { setMarkdownChange } from './../../actions/editor';



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
          <PostList />
          { Editor(editorProps) }
        </div>
      </Provider>
    );
  }
}