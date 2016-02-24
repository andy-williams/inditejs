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
      <i onClick={() => { onEditClick(id) }} className="preview-edit fa fa-pencil-square-o"></i>
      <h1 className="preview-title">{title}</h1>
      <div className="content" dangerouslySetInnerHTML={getHtmlValue(html)} />
    </div>
  </div>
);

Preview.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  html: PropTypes.string,
  onEditClick: PropTypes.func.isRequired
};

export default Preview;