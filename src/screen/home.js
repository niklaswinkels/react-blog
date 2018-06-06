import React, { Component } from "react";
import ClickOutside from "react-click-outside";
import { Col, Row, Container } from "reactstrap";
import Card from "../components/Card/Card";
import LastCard from "../components/LastCard/LastCard";
import logo from "../images/bloomreach_logo_diap.png"

import "../App.css";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      width: props.width
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
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
            <a href="https://developer.bloomreach.com/">Discover BloomReach</a>
          </div>
          <div className="site-branding">
            <a href="https://www.bloomreach.com/">
              <img
                src={logo}
                alt="BloomReach Developer Blog"
              />
            </a>
          </div>
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
            <Row>
              <Col md="6" lg="4">
                <Card
                  post={{
                    name: "Martyn Davies",
                    img:
                      "https://blog.algolia.com/wp-content/uploads/2018/04/Blogpost-KB-Open-Source.jpg",
                    date: "May 8th 2018",
                    title:
                      "Supporting the Open Source Software that makes us Great",
                    text:
                      "At Algolia,many of us are working with,contributing to,or benefitting from open[..]",
                    src:
                      "https://secure.gravatar.com/avatar/d6231e4205a426a0d82eb7df97e52222?s=80&amp;d=mm&amp;r=g",
                    url: "supporting-open-source-projects"
                  }}
                />
              </Col>
              <Col md="6" lg="4">
                <Card
                  post={{
                    name: "Alexandra Prokhorova",
                    img:
                      "https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_Hacking-User-Research.png",
                    date: "April 18th 2018",
                    title: "How to Hack User Research",
                    text:
                      "In this article, we’re sharing how we’re getting creative with conducting user research to […]",
                    src:
                      "https://secure.gravatar.com/avatar/b7b1f6907cbd482084cdddb82f2c0762?s=80&d=mm&r=g",
                    url: "how-to-hack-user-research"
                  }}
                />
              </Col>
              <Col md="6" lg="4">
                <Card
                  post={{
                    name: "Sylvain Friquet",
                    img:
                      "https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01.png",
                    date: "Apr 6th 2018",
                    title: "Building Real Time Analytics APIs at Scale",
                    text:
                      "We recently redesigned our analytics API from the ground up, in order to provide […]",
                    src:
                      "https://secure.gravatar.com/avatar/fedb84f11c7a57ad54880b0da6bbca0d?s=80&d=mm&r=g",
                    url: "building-real-time-analytics-apis"
                  }}
                />
              </Col>
              <Col md="6" lg="4">
                <LastCard />
              </Col>
            </Row>
          </Container>
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
