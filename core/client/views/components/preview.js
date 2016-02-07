import React, { PropTypes } from 'react';

const getHtmlValue = (html) => {
  return { __html: html };
};

function getClassName(title) {
 return `preview-container ${title ? '' : 'blank'}`
}
const Preview = ({
  id,
  title,
  html,
  onEditClick
}) => (
  <div className={getClassName(title)}>
    <div className="preview">
      <a onClick={() => { onEditClick(id) }} className="preview-edit">Edit</a>
      <h1 className="preview-title">{title}</h1>
      <div className="content" dangerouslySetInnerHTML={getHtmlValue(html)} />
    </div>
  </div>
)

Preview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  onEdiClick: PropTypes.func.isRequired
}

export default Preview;