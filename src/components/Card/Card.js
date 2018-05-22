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
              src="https://blog.algolia.com/wp-content/uploads/2018/04/Blogpost-KB-Open-Source-360x200.jpg"
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
              Supporting the Open Source Software that makes us Great
            </a>
          </h2>
          <div className="post-excerpt">
            <p>
              At Algolia many of us are working with, contributing to, or
              benefitting from open […]
            </p>
          </div>
          <div className="entry-meta clear">
            <div className="author-gravatar">
              <img
                alt=""
                src="https://secure.gravatar.com/avatar/d6231e4205a426a0d82eb7df97e52222?s=80&amp;d=mm&amp;r=g"
                srcSet="https://secure.gravatar.com/avatar/d6231e4205a426a0d82eb7df97e52222?s=80&amp;d=mm&amp;r=g 2x"
                className="avatar avatar-40 photo"
                height="40"
                width="40"
                originals="40"
                src-orig="https://secure.gravatar.com/avatar/d6231e4205a426a0d82eb7df97e52222?s=40&amp;d=mm&amp;r=g"
                scale="2"
              />
            </div>
            <div className="entry-author-content">
              <div className="author-name">Martyn Davies</div>
              <div className="post-meta-info"> 6 min read in Algolia</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
