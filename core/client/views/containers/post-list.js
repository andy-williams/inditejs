import { connect } from 'react-redux';
import PostList from './../components/post-list';
import { push } from 'react-router-redux'

import {
  fetchPreviewPost
} from './../../actions/app';


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

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListContainer;