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
  CHANGE_CONTENT,
  OPEN_CONTENT
} from '../actions/editor';

export const initialState = {
  mdValueIsDirty: false,
  _mdValue: '',
  mdValue: '',
  htmlValue: ''
}

export function editor(state = initialState, action) {
  switch(action.type) {

    case CHANGE_CONTENT:
      return {
        mdValue: action.mdValue,
        htmlValue: kramed(action.mdValue)
      }

    case OPEN_CONTENT:
      const post = action.post;
      return {
        mdValue: post.content,
        _mdValue: post.content,
        htmlValue: kramed(post.content)
      }
  }

  return initialState;
}