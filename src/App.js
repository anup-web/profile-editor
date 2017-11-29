import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile';

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

  onToggleDisplay = () => {
    console.log('thonk')
  }

  // () => this.onToggleDisplay()

  render() {
    const user = this.state.user;

    return (
      <div className="App">
        <h1>Profile Editor</h1>

        {/* Toggle Button */}
        <label>
          <h3>Show/Edit Toggle</h3>
          <input type='checkbox' onToggle={ console.log('from render') } />
        </label>

        {/* Render the ShowProfile Component */}
        <ShowProfile user={user}/>

        {/* Render the EditProfile Component */}
        <EditProfile user={user} />

      </div>
    );
  }
}

export default App;
