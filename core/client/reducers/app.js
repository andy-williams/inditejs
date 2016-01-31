import { editor, initialState as editorInitialState } from './editor';
import { openPost } from './../actions/editor';
import {
  OPEN_POST_REQUEST,
  OPEN_POST_SUCCESS,
  OPEN_POST_FAIL,
  UPDATE_POST_LIST_REQUEST,
  UPDATE_POST_LIST_SUCCESS,
} from './../actions/app';
import {
  CHANGE_CONTENT,
  OPEN_CONTENT
} from './../actions/editor';

const initialState = {
  posts: [],
  isNewPost: false,
  isPostSaving: false,
  isPostSavingSuccess: false,
  isPostLoading: false,
  isPostListUpdating: false,
  editor: editorInitialState
};

export default function app(state = initialState, action) {
  switch(action.type) {
    case OPEN_POST_REQUEST:
      return Object.assign({}, state, {
        isPostLoading: true,
        posts: state.posts.map((post) => {
          return Object.assign({}, post, {
            active: action.id == post.id
          })
        })
      })

    case OPEN_POST_SUCCESS:

      let editorAction = openPost(action.post);
      return Object.assign({}, state, {
        isPostLoading: false,
        editor: editor(state.editor, editorAction)
      })

    case UPDATE_POST_LIST_REQUEST:
      return Object.assign({}, state, {
        isPostListUpdating: true
      })

    case UPDATE_POST_LIST_SUCCESS:
      return Object.assign({}, state, {
        isPostListUpdating: false,
        posts: action.posts
      })

    // todo: must be a better way of doing this?
    case CHANGE_CONTENT:
    case OPEN_CONTENT:
      return Object.assign({}, state, {
        editor: editor(state.editor, action)
      })


  }

  return state;
}
