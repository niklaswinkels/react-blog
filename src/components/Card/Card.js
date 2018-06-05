import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.post.url,
      name: this.props.post.name,
      img: this.props.post.img,
      date: this.props.post.date,
      title: this.props.post.title,
      text: this.props.post.text,
      src: this.props.post.src
    };
  }
  render() {
    return (
      <div className="post">
        <div className="post-img">
          <Link
            to={{
              pathname: this.state.url,
              state: {
                title: this.state.title,
                img: this.state.img,
                text: this.state.text,
                name: this.state.name
              }
            }}
          >
            <img
              width="200"
              height="80"
              src={this.state.img}
              className="attachment-aerial_thumbnail size-aerial_thumbnail wp-post-image"
              alt="Supporting the Open Source Software that makes us Great"
              scale="0"
            />
          </Link>
        </div>
        <div className="post-content">
          <div className="post-date">{this.state.date}</div>
          <h2 className="entry-title">
            <Link
              to={{
                pathname: this.state.url,
                state: {
                  title: this.state.title,
                  src: this.state.src,
                  text: this.state.text
                }
              }}
            >
              {this.state.title}
            </Link>
          </h2>
          <div className="post-excerpt">
            <p>{this.state.text}</p>
          </div>
          <div className="entry-meta clear">
            <div className="author-gravatar">
              <img
                alt=""
                src={this.state.src}
                srcSet={this.state.src}
                className="avatar avatar-40 photo"
                height="40"
                width="40"
                originals="40"
                src-orig={this.state.src}
                scale="2"
              />
            </div>
            <div className="entry-author-content">
              <div className="author-name">{this.state.name}</div>
              <div className="post-meta-info"> 6 min read on BloomReach</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
