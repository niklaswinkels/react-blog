import React from 'react';

export default class CodeBottom extends React.Component {

  render() {
    const configuration = this.props.configuration;
    return(
      <div className="CodeBottom" dangerouslySetInnerHTML={{__html:configuration.models.globalAttribute}}/>
    );
  }
}