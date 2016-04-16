import React from 'react';
import PostList from './../components/post-list';
import Preview from './../components/preview';

const PostListPreview = ({
  posts,
  onPostClick,
  children
}) => (
  <div className="app-container">
    <PostList
      posts={posts}
      onPostClick={(id) => onPostClick(id)}
    />
    {children}
  </div>
)

export default PostListPreview;