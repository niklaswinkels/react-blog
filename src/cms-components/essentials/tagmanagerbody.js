import React from 'react';

export default class TagManagerBody extends React.Component {
  render() {
    const configuration = this.props.configuration;
    return (
      <div className="TagManagerBody" dangerouslySetInnerHTML={{__html:configuration.models.script}}/>
    );
  }
}