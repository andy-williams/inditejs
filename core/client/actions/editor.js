export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const OPEN_CONTENT = 'OPEN_CONTENT';

export const EDITOR_OPEN_REQUEST = 'EDITOR_OPEN_REQUEST';
export const EDITOR_OPEN_SUCCESS = 'EDITOR_OPEN_SUCCESS';
export const EDITOR_OPEN_FAIL = 'EDITOR_OPEN_FAIL';

export function changeContent(md) {
  return {
    type: CHANGE_CONTENT,
    mdValue: md
  }
}

export function openPost(post) {
  return {
    type: OPEN_CONTENT,
    post: post
  }
}

function updateEditorContentRequest() {
  return {
    type: EDITOR_OPEN_REQUEST
  }
}

function updateEditorContent(post) {
  return {
    type: EDITOR_OPEN_SUCCESS,
    post: post
  }
}

export function fetchUpdateEditorContent(postId) {
  return function(dispatch) {
    dispatch(updateEditorContentRequest());

    return fetch(`/api/posts/${postId}`)
      .then(response => response.json())
      .then(json => dispatch(updateEditorContent(json)));
  }
}