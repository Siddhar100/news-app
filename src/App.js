import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./MyComponents/Navbar";
import News from "./MyComponents/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title={"TOI News"} />
        <News pageSize={5} category={"health"} />
      </div>
    );
  }
}
