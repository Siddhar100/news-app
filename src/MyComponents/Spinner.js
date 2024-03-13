import React, { Component } from "react";
import load from "../MyComponents/load.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load} alt="loading" />
      </div>
    );
  }
}
