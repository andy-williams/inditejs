import React from 'react';

const MetaDataKeyValueEditor = ({
  metaDataObj
}) => {
  return metaDataObj.keys.map(metaKey => {
    return (
      <div className="meta-data-container">
        <div className="meta-data">
          <div className="meta-key">
            <input type="text" value={metaKey}/>
          </div>
          <div className="meta-value">
            <input type="text" value={metaDataObj[metaKey]}/>
          </div>
        </div>
      </div>
    )
  })
}

const MetaEditor = ({
  metaDataObj
}) =>
(
  <div class="meta-data-container">
    <div class="meta-data">
      <ul>
        { MetaDataKeyValueEditor({ metaDataObj: metaDataObj}) }
      </ul>
    </div>
  </div>
)

export default MetaEditor;