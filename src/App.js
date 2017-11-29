import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Citizen',
      lastName: 'Person',
      // profileImage: 'https://randomuser.me/api/portraits/women/48.jpg'
      profileImage: 'https://pbs.twimg.com/profile_images/887872349743087616/BC_InNdz_400x400.jpg'
    }
  }
  
  // when user types in text field
  // this function is called
  // the event provides info on what happened
  onChangeFirstName = (event) => {
    // get the <input>
    const input = event.target
    // get the current inputted text
    const newFirstName = input.value
    this.setState((prevState) => {
      const user = prevState.user
      user.firstName = newFirstName
      return {
        // this.state.user will be updated
        user: user
      }
    })
  }

  onChangeLastName = (event) => {
    // get input from user
    const input = event.target
    const newLastName = input.value
    this.setState((prevState) => {
      const user = prevState.user
      user.lastName = newLastName
      return {
        user: user
      }
    })
  }

  onChangeProfileImage = (event) => {
    const input = event.target
    const newProfileImage = input.value
    this.setState((prevState) => {
      const user = prevState.user
      user.profileImage = newProfileImage
      return {
        user: user
      }
    })
  }

  render() {
    const user = this.state.user;

    return (
      <div className="App">
        <h1>Profile Editor</h1>
        <img src={user.profileImage} />
        <p><strong>Name: </strong>{user.firstName} {user.lastName}</p>

        <div className="edit-fields">
          <h3>Edit Details</h3>
          {/* First Name Field */}
          <label>
            First name: {' '}
            <input 
            value={user.firstName} 
            onChange={this.onChangeFirstName}
            />
          </label>
          <br />
          {/* Last Name Field */}
          <label>
            Last name: {' '}
            <input 
            value={user.lastName} 
            onChange={this.onChangeLastName}
            />
          </label>
          <br />
          {/* Profile Image Field */}
          <label>
            Profile Iimage URL: {' '}
            <input 
            value={user.profileImage} 
            onChange={this.onChangeProfileImage}
            />
          </label>
        </div>   
      </div>
    );
  }
}

export default App;
