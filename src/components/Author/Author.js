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
            src="https://www.bloomreach.com/binaries/blogimage/content/gallery/bloomreach.com_2/leadership/arje.jpg"
            srcSet="https://www.bloomreach.com/binaries/blogimage/content/gallery/bloomreach.com_2/leadership/arje.jpg 2x"
            className="avatar avatar-80 photo"
            height="80"
            width="80"
            originals="80"
            src-orig="https://www.bloomreach.com/binaries/blogimage/content/gallery/bloomreach.com_2/leadership/arje.jpg"
            scale="2"
          />
        </div>
        <div className="entry-author-content">
          <div className="author-name">Arje Cahn</div>
          <div className="author-position">Co-founder &amp; CTO at BloomReach</div>
          <div className="entry-social-links">
            <a
              href="https://twitter.com/arjecahn"
              className="social-link social-link-aerial_twitter"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/arjecahn/"
              className="social-link social-link-aerial_linkedin"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              href="https://github.com/arjecahn"
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
