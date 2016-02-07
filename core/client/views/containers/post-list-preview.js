import { connect } from 'react-redux';
import PostList from './../components/post-list';
import Preview from './../components/preview';
import {
  fetchPreviewPost
} from './../../actions/app';


const mapStateToProps = (state) => {
  return {
    id: state.app.preview.post.id,
    title: (() => {
      const title = (state.app.preview.meta ? state.app.preview.meta.title : '');
      return title ? title : store.getState().app.preview.post.slug
    })(),
    html: state.app.preview.post.content,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (id) => dispatch(fetchPreviewPost(id))
  }
}

const PostListWithPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)()

export default PostListWithPreview;