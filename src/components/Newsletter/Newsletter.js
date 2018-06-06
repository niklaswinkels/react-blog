import React, { Component } from "react";
import "./style.css";
class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter-form">
        <div className="newsletter-form-title">Subscribe to our newsletter</div>
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
              placeholder="your.email@address.com"
              required=""
            />
            <div className="newsletter-subscribe-btn">
              <button className="btn btn-static-secondary" type="submit">
                Sign me up! <i className="icon-arrow-right m-l-small" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Newsletter;
