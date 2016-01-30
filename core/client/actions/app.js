import fetch from 'isomorphic-fetch'
const postUtils = require('./../../shared/utils/post');

export const NEW_POST = 'NEW_POST';

export const UPDATE_POST_LIST_REQUEST = 'UPDATE_POST_LIST_REQUEST';
export const UPDATE_POST_LIST_SUCCESS = 'UPDATE_POST_LIST_SUCCESS';
export const UDPATE_POST_LIST_FAIL = 'UDPATE_POST_LIST_FAIL';

export const OPEN_POST_REQUEST = 'OPEN_POST_REQUEST';
export const OPEN_POST_SUCCESS = 'OPEN_POST_SUCCESS';
export const OPEN_POST_FAIL = 'OPEN_POST_FAIL';

export const SAVE_POST_REQUEST = 'SAVE_POST_REQUEST';
export const SAVE_POST_SUCCESS = 'SAVE_POST_SUCCESS';
export const SAVE_POST_FAIL = 'SAVE_POST_FAIL';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS_= 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';

// Open Post Actions
function openPostRequest(id) {
  return {
    type: OPEN_POST_REQUEST,
    id: id
  }
}

function openPostSuccess(post) {
  return {
    type: OPEN_POST_SUCCESS,
    post: post
  }
}

export function fetchPost(id) {
  return function(dispatch) {
    dispatch(openPostRequest(id));

    return fetch(`/api/posts/${id}`)
      .then(response => response.json())
      .then(json =>
        dispatch(openPostSuccess(json))
      )
  }
}

// Get Post List actions
function updatePostListRequest() {
  return {
    type: UPDATE_POST_LIST_REQUEST
  }
}

function updatePostListSuccess(posts) {
  return {
    type: UPDATE_POST_LIST_SUCCESS,
    posts: posts
  }
}

export function updatePostList() {
  return function(dispatch) {
    dispatch(updatePostListRequest());

    return fetch('/api/posts')
      .then(response => response.json())
      .then(json => json.map(function(post) {
        return {
          id: post.filename,
          slug: postUtils.getPostSlug(post.filename)
        };
      }))
      .then(json =>
        dispatch(updatePostListSuccess(json))
      )
  }
}