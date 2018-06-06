import React, { Component } from "react";
import "./style.css";

class Author extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div className="entry-meta-title">About the author</div>
        <div className="author-avatar">
          <img
            alt=""
            src={this.props.author && ("http://localhost:8080" + this.props.author.image.original._links.site.href)}
            className="avatar avatar-80 photo"
            height="80"
            width="80"
            originals="80"
            scale="2"
          />
        </div>
        <div className="entry-author-content">
          <div className="author-name">{this.props.author && this.props.author.displayName}</div>
          <div className="author-position">{this.props.author && this.props.author.role}</div>
          <div className="entry-social-links">
            <a
              href=""
              className="social-link social-link-aerial_twitter"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              href=""
              className="social-link social-link-aerial_linkedin"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              href=""
              className="social-link social-link-aerial_github"
            >
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Author;
