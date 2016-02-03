import React from 'react';
import EditorHeader from './editor-header';

const getHtmlValue = (html) => {
  return { __html: html };
};

const Editor = ({
  mdValue,
  htmlValue,
  onMdChange
}) => (
  <div className="editor-container">
    <div className="md-container">
      <textarea onChange={(e) => {
          onMdChange(e.target.value)
      }} value={mdValue}></textarea>
    </div>
    <div className="html-container">
      <div dangerouslySetInnerHTML={getHtmlValue(htmlValue)}/>
    </div>
  </div>
);

export default Editor;