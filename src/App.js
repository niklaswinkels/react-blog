import React, { Component } from "react";
import Home from "./screen/home";
import Detail from "./screen/detail";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={Home} />
          <Route path="detail" component={Detail} />
        </Route>
      </Router>
    );
  }
}

export default App;
