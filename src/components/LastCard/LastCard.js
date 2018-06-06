import React, { Component } from "react";
import "./style.css";
class LastCard extends Component {
  render() {
    return (
      <div className="newsletter-cta">
        <div className="newsletter-cta-bg">
          <div className="post-content">
            <h2>
              <a href="#">Can't find what you're looking for?</a>
            </h2>
            <div className="newsletter-description">
              Subscribe to our newsletter to stay up to date with our
              publications!
            </div>
            <form
              action="#"
              className="km-subscribe-nl-form"
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
        </div>
      </div>
    );
  }
}
export default LastCard;
