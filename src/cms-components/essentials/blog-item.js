import React from 'react';
import { Link } from 'react-router-dom';
import { parseDate } from '../../utils/date';
import {Col} from "reactstrap";
import "../../components/Card/style.css";

export default class BlogItem extends React.Component {
  renderBlogLink (content,author,text) {
    if (content._links && content._links.site && content._links.site.href) {
      if (content._links.site.type === 'internal') {
        return (
          <Link to={content._links.site.href}>
            <div className="post-img">
              <img
                width="200"
                height="80"
                src={content.externalUrl}
                className="attachment-aerial_thumbnail size-aerial_thumbnail wp-post-image"
                alt="Supporting the Open Source Software that makes us Great"
                scale="0"
              />
            </div>
            <div className="post-content">
              <div className="post-date">{parseDate(content.publicationDate)}</div>
              <h2 className="entry-title">
                {content.title}
              </h2>
              <div className="post-excerpt">
                <p>{text}</p>
              </div>
              <div className="entry-meta clear">
                <div className="author-gravatar">
                  <img
                    alt=""
                    src={author.image.original._links.site.href}
                    className="avatar avatar-40 photo"
                    height="40"
                    width="40"
                    originals="40"
                    scale="2"
                  />
                </div>
                <div className="entry-author-content">
                  <div className="author-name">{author.displayName}</div>
                  <div className="post-meta-info"> 6 min read on BloomReach</div>
                </div>
              </div>
            </div>
          </Link>
        );
      } else {
        return (
          <a href={content._links.site.href}>
            <div className="post-img">
              <img
                width="200"
                height="80"
                src={content.externalUrl}
                className="attachment-aerial_thumbnail size-aerial_thumbnail wp-post-image"
                alt="Supporting the Open Source Software that makes us Great"
                scale="0"
              />
            </div>
            <div className="post-content">
              <div className="post-date">{parseDate(content.publicationDate)}</div>
              <h2 className="entry-title">
                {content.title}
              </h2>
              <div className="post-excerpt">
                <p>{text}</p>
              </div>
              <div className="entry-meta clear">
                <div className="author-gravatar">
                  <img
                    alt=""
                    src={author.image.original._links.site.href}
                    className="avatar avatar-40 photo"
                    height="40"
                    width="40"
                    originals="40"
                    scale="2"
                  />
                </div>
                <div className="entry-author-content">
                  <div className="author-name">{author.displayName}</div>
                  <div className="post-meta-info"> 6 min read on BloomReach</div>
                </div>
              </div>
            </div>
          </a>
        )
      }
    }
    return null;
  }

  render () {
    const content = this.props.content;
    const manageContentButton = this.props.manageContentButton;

    var author = this.props.pageModel.content[content.authors[0]["$ref"].split("/")[2]];
    var text = content.introduction;
    return (
      <Col md="6" lg="4">
        <div className="post has-edit-button">
          {manageContentButton && manageContentButton}
          {this.renderBlogLink(content,author,text)}
        </div>
      </Col>
    );
  }
}