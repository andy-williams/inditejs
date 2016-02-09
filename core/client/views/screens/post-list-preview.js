import React from 'react';
import PostList from './../components/post-list';
import Preview from './../components/preview';

const PostListPreview = ({
  posts,
  onPostClick,
  id,
  title,
  html
}) => (
  <div className="app-container">
    <PostList
      posts={posts}
      onPostClick={(id) => onPostClick(id)}
    />
    <Preview
      id={id}
      title={title}
      html={html}
      onEdiClick={() => {}} // todo: implement
    />
  </div>
)

export default PostListPreview;