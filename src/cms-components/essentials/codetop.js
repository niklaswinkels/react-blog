import React from 'react';

export default class CodeTop extends React.Component {
  render() {
    const configuration = this.props.configuration;
    return (
      <div className="CodeTop" dangerouslySetInnerHTML={{__html:configuration.models.globalAttribute}}/>
    );
  }
}