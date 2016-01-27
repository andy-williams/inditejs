export const OPEN_POST = 'OPEN_POST';
export const SAVE_POST = 'SAVE_POST';
export const NEW_POST = 'NEW_POST';
export const DELETE_POST = 'DELETE_POST';

export function setOpenPost(file) {
  return {
    type: OPEN_POST,
    currentPost: file
  }
}

export function setCreateNewPost() {
  return {
    type: NEW_POST
  }
}

export function setSavePost(post) {
  return {
    type: SAVE_POST,
    post: post
  }
}

export function deletePost(post) {
  return {
    type: DELETE_POST,
    post: post
  }
}