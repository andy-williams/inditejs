import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import PostList from './../components/PostList';
import Editor from './../components/Editor';
const { Component } = React;

export default class App extends Component {
  render() {
    console.log("html value is : " + store.getState().editor.htmlValue);
    return (
        <Provider store={store}>
          <div className="app-container">
            <PostList />
            <Editor
                mdValue={store.getState().editor.mdValue}
                htmlValue={store.getState().editor.htmlValue}
            />
          </div>
        </Provider>
    );
  }
}