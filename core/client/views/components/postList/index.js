import React from 'react';
const { Component } = React;

export default class PostList extends Component {
  static initialState = {
    posts: []
  };

  constructor(props) {
    super(props);
  }

  render() {
    const postList = [].map((post) => {
      return (
        <a>{post.title}</a>
      );
    });

    return (
      <div className="post-list-container">
        <ul className="post-list">
          {postList}
        </ul>
      </div>
    );
  }
}