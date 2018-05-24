import React, { Component } from "react";
import "./style.css";

class Author extends Component {
  render() {
    return (
      <div>
        <div className="entry-meta-title">About the author</div>
        <div className="author-avatar">
          <img
            alt=""
            src="https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=160&amp;d=mm&amp;r=g"
            srcSet="https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=160&amp;d=mm&amp;r=g 2x"
            className="avatar avatar-80 photo"
            height="80"
            width="80"
            originals="80"
            src-orig="https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=80&amp;d=mm&amp;r=g"
            scale="2"
          />
        </div>
        <div className="entry-author-content">
          <div className="author-name">Julien Lemoine</div>
          <div className="author-position">Co-founder &amp; CTO at Algolia</div>
          <div className="entry-social-links">
            <a
              href="https://twitter.com/jlemoine_algo"
              className="social-link social-link-aerial_twitter"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/julienlemoine/"
              className="social-link social-link-aerial_linkedin"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              href="https://github.com/speedblue"
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
