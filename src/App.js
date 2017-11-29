import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Aubrey',
      lastName: 'Porter',
      profileImage: 'https://randomuser.me/api/portraits/women/48.jpg'
    }
  }

  render() {
    const user = this.state.user;

    return (
      <div className="App">
        <h1>Profile Editor</h1>
        <img src={user.profileImage} />
        <p><strong>Name: </strong>{user.firstName} {user.lastName}</p>
      </div>
    );
  }
}

export default App;
