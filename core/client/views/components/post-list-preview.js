import React, { PropTypes } from 'react';
const dateFormat = require('dateformat');

const PostListPreview = ({
  PostList,
  children
}) => (
  <div class="post-list-preview-screen">
    {PostList}
    {children}
  </div>
);

export default PostListPreview;