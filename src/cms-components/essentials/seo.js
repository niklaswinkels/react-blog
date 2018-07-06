import React from 'react';
import {Helmet} from "react-helmet";

export default class SEO extends React.Component {
  render() {
    const configuration = this.props.configuration;

    var params = configuration._meta.params;
    // console.log(params);
    return (
      <Helmet>
        <title>{params["site-title"]}</title>
        <meta property="og:title" content={params['site-title']} />
        <meta name="description" content={params['default-meta-description']}/>
        <meta property="og:description" content={params['default-meta-description']} />
      </Helmet>
    );
  }
}