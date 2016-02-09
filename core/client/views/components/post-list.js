import React, { PropTypes } from 'react';
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

const getPostItemClass = (isActive) => `post-list-item ${isActive ? 'active' : ''}`;
const PostItem = ({
  postItem,
  onPostClick
}) => (
  <li className={getPostItemClass(postItem.active)}>
    <a onClick={onPostClick}>
      <span className="title">{postItem.slug}</span>
      <span className="date">{postItem.date ? dateFormat(postItem.date, 'dd-mm-yyyy') : ''}</span>
    </a>
  </li>
)

PostItem.propTypes = {
  onPostClick: PropTypes.func.isRequired,
  postItem: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  })
}

const PostList = ({
  posts,
  onPostClick,
}) => (
  <div className="post-list-container">
    <div className="post-list-inner">
      {PostListControls({
        onSearchFilterChange: () => {},
        onAddClick: () => {}
      })}
      <ul className="post-list">
        {posts.map(post =>
          <PostItem
            key={post.id}
            postItem={post}
            onPostClick={() => onPostClick(post.id)}
          />
        )}
      </ul>
    </div>
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  })).isRequired,
  onPostClick: PropTypes.func.isRequired
};

export default PostList;