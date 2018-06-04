import React, {Component} from "react";
import ClickOutside from "react-click-outside";
import {Col, Row, Container} from "reactstrap";
import Card from "../components/Card/Card";
import LastCard from "../components/LastCard/LastCard";
import LayoutManager from "../components/LayoutManager/LayoutManager";

import "../App.css";

class Home extends Component {
  componentDidMount () {
    var that = this;
    var url = 'http://localhost:8080/site/developer/resourceapi/blog'
    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        that.setState({data: data});
      });
  }

  constructor (props) {
    super(props);

    this.state = {
      modal: false,
      width: props.width
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
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
        <div className="body-container">
          <div className="search-input-container">
            <i className="fa fa-search"/>
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
              <a href="#">BloomReach</a>
            </li>
            <li className="">
              <a href="#">Experience</a>
            </li>
            <li className="">
              <a href="#">Personalization</a>
            </li>
            <li className="">
              <a href="#">UX</a>
            </li>
          </ul>
          <Container>
            /*Layout Manager decides what should be rendered based on page model api*/
            <LayoutManager data={this.state.data ? this.state.data : ''}/>
          </Container>
        </div>
        {this.state.modal === true && (
          <div>
            <div className="newsletter-overlay"/>
            <ClickOutside onClickOutside={this.toggle} className="click-inside">
              <div className="newsletter-form">
                <button
                  type="button"
                  className="close-popup-cross"
                  onClick={this.toggle}
                >
                  <i className="icon icon-close"/>
                </button>
                <div className="newsletter-form-title">Subscribe</div>
                <div className="newsletter-msg">
                  Stay up to date and join the mailing list to get the newest
                  articles!
                </div>

                <form
                  action="http://go.bloomreach.com/join-the-hippo-community.html"
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

export default Home;
