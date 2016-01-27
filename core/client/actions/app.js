export const NEW_POST = 'NEW_POST';

export const OPEN_POST_REQUEST = 'OPEN_POST_REQUEST';
export const OPEN_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const OPEN_POST_FAIL = 'OPEN_POST_FAIL';

export const SAVE_POST_REQUEST = 'SAVE_POST_REQUEST';
export const SAVE_POST_SUCCESS = 'SAVE_POST_SUCCESS';
export const SAVE_POST_FAIL = 'SAVE_POST_FAIL';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS_= 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';

export function setOpenPost(post) {
  return {
    type: OPEN_POST_REQUEST,
    post: post
  }
}

export function setSavePost(post) {
  return {
    type: SAVE_POST_REQUEST,
    post: post
  }
}

export function deletePost(post) {
  return {
    type: DELETE_POST_REQUEST,
    post: post
  }
}