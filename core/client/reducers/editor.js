const kramed = require('kramed');
kramed.setOptions({
  renderer: new kramed.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

import {
  EDITOR_OPEN_REQUEST,
  EDITOR_OPEN_SUCCESS,
  CHANGE_CONTENT
} from '../actions/editor';

export const initialState = {
  isLoading: true,
  data: {
    id: '',
    mdValueIsDirty: false,
    _mdValue: '',
    mdValue: '',
    htmlValue: ''
  }
};

export function editor(state = initialState, action) {
  switch(action.type) {

    case CHANGE_CONTENT:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          mdValue: action.mdValue,
          htmlValue: kramed(action.mdValue),
          mdValueIsDirty: action.mdValue != state._mdValue
        })
      });

    case EDITOR_OPEN_SUCCESS:
      const post = action.post;
      return Object.assign({}, state, {
        isLoading: false,
        data: Object.assign({}, state.data, {
          id: post.id,
          mdValue: post.content,
          _mdValue: post.content,
          htmlValue: kramed(post.content)
        })
      });
  }

  return initialState;
}