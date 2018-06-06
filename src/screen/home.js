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
                    name: "Arje Cahn",
                    img:
                      "https://www.bloomreach.com/binaries/original/content/gallery/blog/autosuggest.png",
                    date: "May 8th 2018",
                    title:
                      "Supporting the Open Source Software that makes us Great",
                    text:
                      "At BloomReach,many of us are working with,contributing to,or benefitting from open[..]",
                    src:
                      "https://www.bloomreach.com/binaries/blogimage/content/gallery/bloomreach.com_2/leadership/arje.jpg",
                    url: "supporting-open-source-projects"
                  }}
                />
              </Col>
              <Col md="6" lg="4">
                <Card
                  post={{
                    name: "Arje Cahn",
                    img:
                      "https://www.bloomreach.com/binaries/original/content/gallery/blog/bloomreach_api-illustration_final-01.png",
                    date: "April 18th 2018",
                    title: "How to Hack User Research",
                    text:
                      "In this article, we’re sharing how we’re getting creative with conducting user research to […]",
                    src:
                      "https://www.bloomreach.com/binaries/blogimage/content/gallery/bloomreach.com_2/leadership/arje.jpg",
                    url: "how-to-hack-user-research"
                  }}
                />
              </Col>
              <Col md="6" lg="4">
                <Card
                  post={{
                    name: "Arje Cahn",
                    img:
                      "https://www.bloomreach.com/binaries/original/content/gallery/blog/sysper.png",
                    date: "Apr 6th 2018",
                    title: "Building Real Time Analytics APIs at Scale",
                    text:
                      "We recently redesigned our analytics API from the ground up, in order to provide […]",
                    src:
                      "https://www.bloomreach.com/binaries/blogimage/content/gallery/bloomreach.com_2/leadership/arje.jpg",
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
