import { editor, initialState as editorInitialState } from './editor';
import { preview, initialState as previewInitialState } from './preview';
import { previewPost } from './../actions/preview';
import { openPost } from './../actions/editor';
import {
  PREVIEW_POST_REQUEST,
  PREVIEW_POST_SUCCESS,
  PREVIEW_POST_FAIL,
  UPDATE_POST_LIST_REQUEST,
  UPDATE_POST_LIST_SUCCESS,
} from './../actions/app';
import {
  CHANGE_CONTENT,
  EDITOR_OPEN_REQUEST,
  EDITOR_OPEN_SUCCESS,
  EDITOR_OPEN_FAIL
} from './../actions/editor';

const initialState = {
  posts: [],
  isNewPost: false,
  isPostSaving: false,
  isPostSavingSuccess: false,
  isPostLoading: false,
  isPostListUpdating: false,
  editor: editorInitialState,
  preview: previewInitialState
};

export default function app(state = initialState, action) {
  switch(action.type) {
    case PREVIEW_POST_REQUEST:
      return Object.assign({}, state, {
        isPostLoading: true,
        posts: state.posts.map((post) => {
          return Object.assign({}, post, {
            active: action.id == post.id
          })
        })
      });

    case PREVIEW_POST_SUCCESS:
      let previewAction = previewPost(action.post);
      return Object.assign({}, state, {
        isPostLoading: false,
        preview: preview(state.editor, previewAction)
      });

    case UPDATE_POST_LIST_REQUEST:
      return Object.assign({}, state, {
        isPostListUpdating: true
      });

    case UPDATE_POST_LIST_SUCCESS:
      return Object.assign({}, state, {
        isPostListUpdating: false,
        posts: action.posts
      });

    // todo: must be a better way of doing this?
    case CHANGE_CONTENT:
    case EDITOR_OPEN_SUCCESS:
      return Object.assign({}, state, {
        editor: editor(state.editor, action)
      });
  }

  return state;
}
