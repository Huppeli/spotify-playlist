import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Custom extends Component {
  render() {
    return (
      <div className="custom">
        <h2 style={{color:"#000"}} >Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img/>
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{width: "25%", display: "inline-block"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Custom />
        <Custom />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
