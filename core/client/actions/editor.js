export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const OPEN_CONTENT = 'OPEN_CONTENT';

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