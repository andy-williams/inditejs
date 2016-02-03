import React from 'react';

const EditorHeader = ({
  slug,
  date
  }) => (
  <div className="editor-header-container">
    <div className="editor-header">
      <div className="slug">
        <input type="text" value={slug} />
      </div>
      <div className="date">
        <input className="text" value={date} />
      </div>
    </div>
  </div>
)

export default EditorHeader;