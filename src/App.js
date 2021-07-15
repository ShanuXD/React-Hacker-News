import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/top">
            <Body newsType={"top"} />
          </Route>
          <Route path="/new">
            <Body newsType={"new"} />
          </Route>
          <Route path="/best">
            <Body newsType={"best"} />
          </Route>
          <Route path="*">
            <div className="home" style={{ fontSize: "50px" }}>
              Page Not Found,
              Error 404
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
