import { connect } from 'react-redux';
import PostPreview from './../components/preview';
import { push } from 'react-router-redux'
import React, { Component } from 'react';
import { fetchPreviewPost } from './../../actions/app';
import store from './../../store';


const mapStateToProps = (state) => {
  return {
    id: state.app.preview.post.id,
    title: (() => {
      const title = (state.app.preview.post.meta ? state.app.preview.post.meta.title : '');
      return title ? title : state.app.preview.post.slug
    })(),
    html: state.app.preview.post.content
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (id) => dispatch(push(`/edit/${id}`))
  }
};

const PostPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPreview);

export class PostPreviewRouteHandler extends Component {
  render() {
    const { postId } = this.props.params;
    store.dispatch(fetchPreviewPost(postId)); // dispatch event
    return (
      <div>
        <PostPreviewContainer />
      </div>
    )
  }
}

export default PostPreviewRouteHandler;