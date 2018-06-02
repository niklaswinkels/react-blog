import React, { Component } from "react";
import ClickOutside from "react-click-outside";
import { Col, Row, Container } from "reactstrap";
import Card from "../components/Card/Card";
import LastCard from "../components/LastCard/LastCard";

import "../App.css";
class Home extends Component {
  componentDidMount() {
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
        var hstBlogs = [];
        data.page.components.forEach(component => {
          //identify the list component that has blogs
          if (component.componentClass === 'org.hippoecm.hst.pagecomposer.builtin.components.StandardContainerComponent'
            && component.label === 'Landing page container') {
              component.components.forEach(containerComponent => {
                if(containerComponent.componentClass === 'org.onehippo.cms7.essentials.components.EssentialsListComponent'
              && containerComponent.label === 'Generic List')
                containerComponent.models.pageable.items.forEach(item => {
                  hstBlogs.push(data.content[item["$ref"].split("/")[2]]);
                })
              })
          }
        });
        var blogs = [];
        hstBlogs.forEach(hstBlog => {
          var date = new Date(hstBlog.publicationDate)
          if (hstBlog.authors) {
            var authorJsonLinkIndex = hstBlog.authors[0]["$ref"].split("/")[2]
          }
          var authorObj = data.content[authorJsonLinkIndex]
          blogs.push({
            date: date.toDateString(),
            title: hstBlog.title,
            introduction: hstBlog.introduction,
            author: authorObj,
            fullyQualifiedUrl: hstBlog.fullyQualifiedUrl
          });
        })
        that.setState({ blogs: blogs });
      });
  }
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

  renderBlogs() {
    if (this.state.blogs) {
      return this.state.blogs.map((blog, index) => {
        return <Col md="6" lg="4" key={index}>
          <Card
            post={{
              name: blog.author.displayName,
              img:
                "https://blog.algolia.com/wp-content/uploads/2018/04/Blogpost-KB-Open-Source.jpg",
              date: blog.date,
              title: blog.title,
              text: blog.introduction,
              src: blog.author.image ? "http://localhost:8080" + blog.author.image.original._links.site.href
               : "https://secure.gravatar.com/avatar/d6231e4205a426a0d82eb7df97e52222?s=80&amp;d=mm&amp;r=g",
              url: blog.fullyQualifiedUrl.split("http://localhost:8080/site/developer/resourceapi/blog/")[1]
            }}
          />
        </Col>
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="top-background" />
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
              {this.renderBlogs()}
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
