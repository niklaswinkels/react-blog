import React, { Component } from "react";
import "./style.css";
class Card extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-img">
          <a href="https://blog.algolia.com/supporting-open-source-projects/">
            <img
              width="360"
              height="200"
              src="https://www.bloomreach.com/binaries/original/content/gallery/blog/autosuggest.png"
              className="attachment-aerial_thumbnail size-aerial_thumbnail wp-post-image"
              alt="Supporting the Open Source Software that makes us Great"
              scale="0"
            />
          </a>
        </div>
        <div className="post-content">
          <div className="post-date">May 8th 2018</div>
          <h2 className="entry-title">
            <a
              href="https://blog.algolia.com/supporting-open-source-projects/"
              rel="bookmark"
            >
              Evolution of Autosuggest at BloomReach
            </a>
          </h2>
          <div className="post-excerpt">
            <p>
              At BloomReach many of us are working with, contributing to, or
              benefitting from open […]
            </p>
          </div>
          <div className="entry-meta clear">
            <div className="author-gravatar">
              <img
                alt=""
                src="https://www.bloomreach.com/binaries/content/gallery/blog/authors/navin-patre.jpg"
                srcSet="https://www.bloomreach.com/binaries/content/gallery/blog/authors/navin-patre.jpg 2x"
                className="avatar avatar-40 photo"
                height="40"
                width="40"
                originals="40"
                src-orig="https://www.bloomreach.com/binaries/content/gallery/blog/authors/navin-patre.jpg"
                scale="2"
              />
            </div>
            <div className="entry-author-content">
              <div className="author-name">Pratik Patre</div>
              <div className="post-meta-info"> 6 min read in Engineering</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
