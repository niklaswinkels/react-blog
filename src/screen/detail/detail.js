import React, {Component} from "react";
import ClickOutside from "react-click-outside";
import {Col, Row, Container} from "reactstrap";
import Card from "../../components/Card/Card";
import LastCard from "../../components/LastCard/LastCard";
import Author from "../../components/Author/Author";
import Content from "../../components/Content/Content";
import Newsletter from "../../components/Newsletter/Newsletter";
import "../../App.css";
import "./style.css";

class Detail extends Component {
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

  componentDidMount () {
    var resourceDetailBaseUrl = "http://localhost:8080/site/developer/resourceapi/blog";
    var that = this;
    fetch(resourceDetailBaseUrl + this.props.location.pathname)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        data.page.components.forEach(component => {
          if (component.componentClass === 'org.onehippo.cms7.essentials.components.EssentialsContentComponent') {
            var blog = data.content[component.models.document.$ref.split("/")[2]];
            //find author of blog
            var authorRef = blog.authors[0].$ref.split("/")[2];
            blog.author = data.content[authorRef];
            that.setState({blog: blog});
            console.log(blog);
          }
        });
      });
  }

  render () {
    return (
      <div className="App">
        <div className="top-background"/>
        <div className="header-container">
          <div className="header-left hidden-sm">
            <a href="https://www.algolia.com/">Discover BloomReach</a>
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
            <a className="btn btn-static-default">Get the newsletter</a>
          </div>
        </div>
        <div className="container">
          <div className="entry-thumbnail">
            <img
              width="650"
              height="450"
              src={this.state.blog && this.state.blog.externalUrl}
              className="attachment-1160x650 size-1160x650 wp-post-image"
              alt={this.state.blog && this.state.blog.title}
              // srcSet="https://www.bloomreach.com/binaries/original/content/gallery/blog/autosuggest.png 3000w, https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01-320x178.png 320w, https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01-768x427.png 768w, https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01-720x400.png 720w, https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01-360x200.png 360w"
              sizes="(max-width: 1160px) 100vw, 1160px"
            />
            <header className="entry-header">
              <div className="entry-header-content">
                <h1 className="entry-title text-center">
                  {this.state.blog && this.state.blog.title}
                </h1>
                <div className="head-post-meta">
                  {this.state.blog && this.state.blog.author && this.state.blog.author.displayName}
                </div>
              </div>
            </header>
          </div>
          <div className="entry-content">
            <div
              id="crestashareiconincontent"
              className="cresta-share-icon first_style"
            >
              <div className="sbutton" id="facebook-cresta-c">
                <a
                  rel="nofollow"
                  href="#"
                  title="Share to Facebook"
                >
                  <i className="c-icon-cresta-facebook fa fa-facebook-f"/>
                </a>
              </div>
              <div className="sbutton" id="twitter-cresta-c">
                <a
                  rel="nofollow"
                  href="#"
                  title="Share to Twitter"
                >
                  <i className="c-icon-cresta-twitter fa fa-twitter"/>
                </a>
              </div>
              <div className="sbutton" id="linkedin-cresta-c">
                <a
                  rel="nofollow"
                  href="#"
                  title="Share to Linkedin"
                >
                  <i className="c-icon-cresta-linkedin fa fa-linkedin"/>
                </a>
              </div>
            </div>
            <div style={{clear: "both"}}/>
            <Content content={this.state.blog ? this.state.blog.body.value : ''}/>
          </div>
          <div id="author" className="entry-meta clear">
            <Author author={(this.state.blog && this.state.blog.author) ? this.state.blog.author : ''}/>
          </div>
          <Newsletter/>
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

export default Detail;
