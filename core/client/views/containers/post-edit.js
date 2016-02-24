import { connect } from 'react-redux';
import { changeContent } from './../../actions/editor';
import PostEdit from './../screens/post-edit';

const mapStateToProps = (state) => {
  return {
    mdValue: state.app.editor.mdValue,
    htmlValue: state.app.editor.htmlValue
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