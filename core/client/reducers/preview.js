import { SHOW_PREVIEW, CLOSE_PREVIEW } from './../actions/preview';

export const initialState = {
  isOpen: false,
  post: {}
};

export function preview(state = initialState, action) {
  switch(action.type) {

    case SHOW_PREVIEW:
      return {
        post: action.post,
        isOpen: true
      };

    case CLOSE_PREVIEW:
      return {
        post: {},
        isOpen: false
      };

    default:
      return state;
  }
}

