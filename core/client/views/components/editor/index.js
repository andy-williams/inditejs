import React from 'react';
const { Component } = React;
import { connect } from 'react-redux'
import store from './../../../store';
import { setMarkdownChange } from './../../../actions/editor';

export default class Editor extends Component {

  getHtml() {
    return {__html: this.props.htmlValue};
  }

  render() {
    return (
        <div className="editor-container">
          <div className="md-container">
            <textarea onChange={(e) => {
                store.dispatch(setMarkdownChange(e.target.value))
            }} value={this.props.mdValue || ''}></textarea>
          </div>
          <div className="html-container">
            <div dangerouslySetInnerHTML={this.getHtml() || ''}/>
          </div>
        </div>
    )
  }
}