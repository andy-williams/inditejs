import { OPEN_POST_REQUEST, OPEN_POST_SUCCESS, OPEN_POST_FAIL } from './../actions/app';

const initialState = {
  currentPost: '',
  isNewPost: false,
  isPostSaving: false,
  isPostSavingSuccess: false,
  isPostLoading: false
};

export default function app(state = initialState, action) {
  switch(action.type) {
    case OPEN_POST_REQUEST:
      return {
        ...state,
        isPostLoading: true
      }
    default:
      return state;
  }
}

