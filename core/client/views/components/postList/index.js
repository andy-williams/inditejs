import React from 'react';

const PostItem = ({
  postItem,
  onPostClick
}) => {
  const handleClick = onPostClick.bind(null, postItem.id);
  return (
    <li key={postItem.id} className="post-list-item">
      <a onClick={handleClick}>{postItem.slug}</a>
    </li>
  )
}

const PostList = ({
  posts,
  onPostClick,
}) => {
  const postList = posts.map(function(post) {
    return PostItem({ postItem: post, onPostClick: onPostClick });
  });
  return (
  <div className="post-list-container">
    <ul className="post-list">
      {postList}
    </ul>
  </div>
  )
}

export default PostList;