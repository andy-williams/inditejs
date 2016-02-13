import { connect } from 'react-redux';
import PostListPreview from './../screens/post-list-preview';

import {
  fetchPreviewPost
} from './../../actions/app';


const mapStateToProps = (state) => {
  return {
    id: state.app.preview.post.id,
    title: (() => {
      const title = (state.app.preview.meta ? state.app.preview.meta.title : '');
      return title ? title : state.app.preview.post.slug
    })(),
    html: state.app.preview.post.content,
    posts: state.app.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (id) => dispatch(fetchPreviewPost(id))
  }
};

// todo: currently not returning wrapped React component
const PostListWithPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListPreview);

export default PostListWithPreview;