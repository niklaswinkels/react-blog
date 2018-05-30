import React, { Component } from "react";
import Home from "./screen/home";
import Detail from "./screen/detail/detail";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*<Route exact={true} path="/" component={Home} />*/}
          {/*<Route path="/:pathId" component={Detail} />*/}
          <Route path="/site/developer/blog" component={Home} />
          <Route path="/site/developer/:blogName" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
