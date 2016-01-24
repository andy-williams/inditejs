import { CHANGE_MARKDOWN } from '../actions/editor';

const initialState = {
  mdValue: '',
  htmlValue: ''
};

export default function editor(state = initialState, action) {
  const { type, mdValue, htmlValue } = action;

  if (type == CHANGE_MARKDOWN) {
    return {
      mdValue: mdValue,
      htmlValue: htmlValue
    };
  }

  return initialState;
}