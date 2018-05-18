import React, { Component } from "react";
import ClickOutside from "react-click-outside";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    console.log("clicke");
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="App">
        <div className="top-background" />
        <div className="header-container">
          <div className="header-left hidden-sm">
            <a href="https://www.algolia.com/">Discover Algolia</a>
          </div>
          <p className="site-branding">
            <a href="https://www.algolia.com/">
              <img
                src="https://blog.algolia.com/wp-content/themes/aerial/images/algolia-logo-dark.svg"
                alt="Algolia Blog"
              />
            </a>
          </p>
          <div className="header-right" onClick={this.toggle}>
            <a className="btn btn-static-default" href="#">
              Get the newsletter
            </a>
          </div>
        </div>
        <div className="body-container">
          <div className="search-input-container">
            <i className="fa fa-search" />
            <input
              id="search"
              type="text"
              className="search-input"
              placeholder="Discover articles, authors…"
            />
          </div>
          <ul className="categories-list hidden-xs">
            <li className="">
              <a href="#">Product</a>
            </li>
            <li className="">
              <a href="#">Engineering</a>
            </li>
            <li className="">
              <a href="#">Algolia</a>
            </li>
            <li className="">
              <a href="#">Customers</a>
            </li>
            <li className="">
              <a href="#">E-commerce</a>
            </li>
            <li className="">
              <a href="#">UX</a>
            </li>
          </ul>
        </div>
        {this.state.modal === true && (
          <div>
            <div className="newsletter-overlay" />
            <ClickOutside onClickOutside={this.toggle} className="click-inside">
              <div className="newsletter-form">
                <button
                  type="button"
                  className="close-popup-cross"
                  onClick={this.toggle}
                >
                  <i className="icon icon-close" />
                </button>
                <div className="newsletter-form-title">Subscribe</div>
                <div className="newsletter-msg">
                  Stay up to date and join the mailing list to get the newest
                  articles!
                </div>

                <form
                  action="https://go.pardot.com/l/139121/2016-06-09/f3kzm"
                  method="post"
                >
                  <div className="flex-container newsletter-input">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="email@address.com"
                      required=""
                    />
                    <div className="newsletter-subscribe-btn">
                      <button type="submit">Sign me up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </ClickOutside>
          </div>
        )}
      </div>
    );
  }
}

export default App;
