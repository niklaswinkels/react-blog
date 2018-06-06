import { Component } from "react";
import Parser from 'html-react-parser';
class Content extends Component {
  render() {
    return Parser(
      this.props.content
    )
  }
}
export default Content;
