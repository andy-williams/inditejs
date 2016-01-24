let marked = require('marked');
export const CHANGE_MARKDOWN = 'CHANGE_MARKDOWN'

export function setMarkdownChange(md) {
  return {
    type: CHANGE_MARKDOWN,
    mdValue: md,
    htmlValue: marked(md)
  }
}