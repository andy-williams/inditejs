const marked = require('marked');
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
        htmlValue: marked(action.mdValue)
      }

    case OPEN_CONTENT:
      const post = action.post;
      return {
        mdValue: post.content,
        _mdValue: post.content,
        htmlValue: marked(post.content)
      }
  }

  return initialState;
}