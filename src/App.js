import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Profile Editor</h1>
        <img src='https://randomuser.me/api/portraits/women/48.jpg' />
        <p><strong>Name:</strong>aubrey porter</p>
      </div>
    );
  }
}

export default App;
