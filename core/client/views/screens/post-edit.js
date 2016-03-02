import React from 'react';
import Editor from './../components/editor';

const PostEdit = ({
  mdValue,
  htmlValue,
  onMdChange
}) =>
(
  <div>
    <Editor
      mdValue={mdValue}
      onMdChange={onMdChange}
      htmlValue={htmlValue}
    />
  </div>
);

export default PostEdit;