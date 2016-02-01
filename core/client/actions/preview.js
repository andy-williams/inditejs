export const SHOW_PREVIEW = 'SHOW_PREVIEW';
export const CLOSE_PREVIEW = 'CLOSE_PREVIEW';

export function previewPost(post) {
  return {
    type: SHOW_PREVIEW,
    post: post
  }
}