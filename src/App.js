import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./MyComponents/Navbar";
import News from "./MyComponents/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar title={"TOI News"} />
                  <News key={"/"} pageSize={5} category={"health"} />
                </>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <>
                  <Navbar title={"TOI News"} />
                  <News
                    key={"entertainment"}
                    pageSize={5}
                    category={"entertainment"}
                  />
                </>
              }
            />
            <Route
              exact
              path="/science"
              element={
                <>
                  <Navbar title={"TOI News"} />
                  <News key={""} pageSize={5} category={"science"} />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
