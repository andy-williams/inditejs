import React from 'react';

const PostItem = ({
  postItem,
  onPostClick
}) => (
  <li className="post-list-item">
    <a onClick={(e) => onPostClick(postItem.title)}>{postItem.title}</a>
  </li>
)

const PostList = ({
  posts,
  onPostClick,
}) => {
  let postList = posts.map(function(post) {
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