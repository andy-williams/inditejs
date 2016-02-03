import React from 'react';
const dateFormat = require('dateformat');

const PostListControls = ({
  onSearchFilterChange,
  onAddClick
  }) => (
  <div className="post-list-control-container">
    <div className="post-list-control">
      <input onChange={(e) => onSearchFilterChange(e.target.value)}  type="text" className="search-filter" placeholder="Search Posts..." />
      <a onClick={onAddClick} className="new-post">Add</a>
    </div>
  </div>
)

const PostItem = ({
  postItem,
  onPostClick
}) => {
  const handleClick = onPostClick.bind(null, postItem.id);
  const liClass = `post-list-item ${postItem.active ? 'active' : ''}`
  return (
    <li key={postItem.id} className={liClass}>
      <a onClick={handleClick}>
        <span className="title">{postItem.slug}</span>
        <span className="date">{postItem.date ? dateFormat(postItem.date, 'dd-mm-yyyy') : ''}</span>
      </a>
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
    <div className="post-list-inner">
      {PostListControls({
        onSearchFilterChange: () => {},
        onAddClick: () => {}
      })}
      <ul className="post-list">
        {postList}
      </ul>
    </div>
  </div>
  )
}

export default PostList;