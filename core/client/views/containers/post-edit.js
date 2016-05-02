import { connect } from 'react-redux';
import React, { Component } from 'react';
import store from './../../store';
import { fetchUpdateEditorContent } from './../../actions/editor';
import { changeContent } from './../../actions/editor';
import PostEdit from './../screens/post-edit';

const mapStateToProps = (state) => {
  return {
    id: state.routing,
    mdValue: state.app.editor.data.mdValue,
    htmlValue: state.app.editor.data.htmlValue
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMdChange: (md) => { dispatch(changeContent(md))}
  }
};

const PostEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit);

export default PostEditContainer;

export class PostEditRouteHandler extends Component {
  render() {
    const { postId } = this.props.params;
    store.dispatch(fetchUpdateEditorContent(postId)); // dispatch event
    return (
      <div>
        <PostEditContainer />
      </div>
    )
  }
};