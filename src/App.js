import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';

export default class App extends Component {
  render() {
    return (
      <div>
         <Navbar title={"TOI News"}/>
         <News/>
      </div>
    )
  }
}
