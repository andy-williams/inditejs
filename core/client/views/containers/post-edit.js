import { connect } from 'react-redux';
import { changeContent } from './../../actions/editor';
import PostEdit from './../screens/post-edit';
import React, { Component } from 'react';
import { fetchUpdateEditorContent } from './../../actions/editor';
import store from './../../store';

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