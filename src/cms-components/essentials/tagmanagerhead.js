import React from 'react';
import {Helmet} from "react-helmet";

export default class tagmanagerhead extends React.Component {
  render() {
    const configuration = this.props.configuration;
    const result = configuration.models.script.match(/<script>[a-zA-Z\s\d\W_]*<\/script>/g).map(function(val){
      return val.replace(/<\/?script>/g,'');
    });
    return (
      <Helmet>
        <script>{result[0]}</script>
      </Helmet>
    );
  }
}