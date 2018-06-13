import React from 'react';

export default class Header extends React.Component {
  render() {
    const pageModel = this.props.pageModel;
    const preview = this.props.preview;

    return (
      <div className="App">
      <div className="top-background"/>
      <div className="header-container">
        <div className="header-left hidden-sm">
          <a href="https://developer.bloomreach.com/">Discover BloomReach</a>
        </div>
        <p className="site-branding">
          <a href="https://www.bloomreach.com/">
            <img
              src="https://www.bloomreach.com/webfiles/1526984875645/com-assets/img/logo.svg"
              alt="BloomReach Developer Blog"
            />
          </a>
        </p>
        <div className="header-right" onClick={this.toggle}>
          <a className="btn btn-static-default" href="#">
            Get the newsletter
          </a>
        </div>
      </div>
      </div>
    );
  }
}