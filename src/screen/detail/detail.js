import React from "react";
import ClickOutside from "react-click-outside";
import Author from "../../components/Author/Author";
import Content from "../../components/Content/Content";
import Newsletter from "../../components/Newsletter/Newsletter";

export default class Detail extends React.Component {
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
    var that = this;
    var blog = this.props.pageModel.content[this.props.configuration.models.document.$ref.split("/")[2]];
    //find author of blog
    var authorRef = blog.authors[0].$ref.split("/")[2];
    blog.author = this.props.pageModel.content[authorRef];
    that.setState({blog: blog});

  }

  render () {
    return (
      <div className="Detail">
        <div className="container">
          <div className="entry-thumbnail">
            <img
              width="650"
              height="450"
              src={this.state.blog && this.state.blog.externalUrl}
              className="attachment-1160x650 size-1160x650 wp-post-image"
              alt={this.state.blog && this.state.blog.title}
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
                  href=""
                  title="Share to Facebook"
                >
                  <i className="c-icon-cresta-facebook fa fa-facebook-f"/>
                </a>
              </div>
              <div className="sbutton" id="twitter-cresta-c">
                <a
                  rel="nofollow"
                  href=""
                  title="Share to Twitter"
                >
                  <i className="c-icon-cresta-twitter fa fa-twitter"/>
                </a>
              </div>
              <div className="sbutton" id="linkedin-cresta-c">
                <a
                  rel="nofollow"
                  href=""
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
