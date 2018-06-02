import React, { Component } from "react";
import Parser from 'html-react-parser';
class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return Parser(
      this.props.content
    )
  }
}
export default Content;
