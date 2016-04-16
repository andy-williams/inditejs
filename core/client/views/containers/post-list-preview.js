import { connect } from 'react-redux';
import PostListPreviewScreen from './../screens/post-list-preview';
import { push } from 'react-router-redux'
import React, { Component } from 'react';
import { fetchPreviewPost } from './../../actions/app';


const mapStateToProps = (state) => {
  return {
    posts: state.app.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (id) => dispatch(push(`/preview/${id}`))
  }
};

const PostListPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListPreviewScreen);

export default PostListPreviewContainer;