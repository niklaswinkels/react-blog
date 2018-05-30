import React, { Component } from "react";
import ClickOutside from "react-click-outside";
import { Col, Row, Container } from "reactstrap";
import Card from "../../components/Card/Card";
import LastCard from "../../components/LastCard/LastCard";
import Author from "../../components/Author/Author";
import Content from "../../components/Content/Content";
import Newsletter from "../../components/Newsletter/Newsletter";
import "../../App.css";
import "./style.css";
class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      width: props.width
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    console.log("clicke");
    this.setState({
      modal: !this.state.modal
    });
  }
  componentDidMount() {
    const { handle } = this.props.match.params;
    const { fromState } = this.props.location.state;
  }
  render() {
    return (
      <div className="App">
        <div className="top-background" />
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
              width="1160"
              height="645"
              src="https://www.bloomreach.com/binaries/original/content/gallery/blog/autosuggest.png"
              className="attachment-1160x650 size-1160x650 wp-post-image"
              alt="Building Analytics APIs at Scale"
              srcSet="https://www.bloomreach.com/binaries/original/content/gallery/blog/autosuggest.png 3000w, https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01-320x178.png 320w, https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01-768x427.png 768w, https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01-720x400.png 720w, https://blog.algolia.com/wp-content/uploads/2018/04/04-2018_SAnalytics-API-at-scale-01-360x200.png 360w"
              sizes="(max-width: 1160px) 100vw, 1160px"
            />
            <header className="entry-header">
              <div className="entry-header-content">
                <h1 className="entry-title text-center">
                  {this.props.location.state.title}
                </h1>
                <div className="head-post-meta">
                  {this.props.location.state.name}
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
                  href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.algolia.com%2Fandroid-ndk-how-to-reduce-libs-size%2F&amp;t=Android+NDK%3A+How+to+Reduce+Binaries+Size+%E2%80%93+The+Algolia+Blog"
                  title="Share to Facebook"
                >
                  <i className="c-icon-cresta-facebook fa fa-facebook-f" />
                </a>
              </div>
              <div className="sbutton" id="twitter-cresta-c">
                <a
                  rel="nofollow"
                  href="https://twitter.com/share?text=Android+NDK%3A+How+to+Reduce+Binaries+Size+%E2%80%93+The+Algolia+Blog&amp;url=https%3A%2F%2Fblog.algolia.com%2Fandroid-ndk-how-to-reduce-libs-size%2F&amp;via=algolia"
                  title="Share to Twitter"
                >
                  <i className="c-icon-cresta-twitter fa fa-twitter" />
                </a>
              </div>
              <div className="sbutton" id="linkedin-cresta-c">
                <a
                  rel="nofollow"
                  href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fblog.algolia.com%2Fandroid-ndk-how-to-reduce-libs-size%2F&amp;title=Android+NDK%3A+How+to+Reduce+Binaries+Size+%E2%80%93+The+Algolia+Blog&amp;source=https://blog.algolia.com/"
                  title="Share to Linkedin"
                >
                  <i className="c-icon-cresta-linkedin fa fa-linkedin" />
                </a>
              </div>
            </div>
            <div style={{ clear: "both" }} />
            <Content />
            <div className="bottom-share">
              <div
                id="crestashareiconincontent"
                className="cresta-share-icon first_style"
              >
                <div className="sbutton" id="facebook-cresta-c">
                  <a
                    rel="nofollow"
                    href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.algolia.com%2Fandroid-ndk-how-to-reduce-libs-size%2F&amp;t=Android+NDK%3A+How+to+Reduce+Binaries+Size+%E2%80%93+The+Algolia+Blog"
                    title="Share to Facebook"
                  >
                    <i className="c-icon-cresta-facebook fa fa-facebook-f" />
                  </a>
                </div>
                <div className="sbutton" id="twitter-cresta-c">
                  <a
                    rel="nofollow"
                    href="https://twitter.com/share?text=Android+NDK%3A+How+to+Reduce+Binaries+Size+%E2%80%93+The+Algolia+Blog&amp;url=https%3A%2F%2Fblog.algolia.com%2Fandroid-ndk-how-to-reduce-libs-size%2F&amp;via=algolia"
                    title="Share to Twitter"
                  >
                    <i className="c-icon-cresta-twitter fa fa-twitter" />
                  </a>
                </div>
                <div className="sbutton" id="linkedin-cresta-c">
                  <a
                    rel="nofollow"
                    href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fblog.algolia.com%2Fandroid-ndk-how-to-reduce-libs-size%2F&amp;title=Android+NDK%3A+How+to+Reduce+Binaries+Size+%E2%80%93+The+Algolia+Blog&amp;source=https://blog.algolia.com/"
                    title="Share to Linkedin"
                  >
                    <i className="c-icon-cresta-linkedin fa fa-linkedin" />
                  </a>
                </div>
                <div style={{ clear: "both" }} />
              </div>
              <div style={{ clear: "both" }} />
            </div>
          </div>
          <div id="author" className="entry-meta clear">
            <Author />
          </div>
          <Newsletter />
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
export default Detail;
