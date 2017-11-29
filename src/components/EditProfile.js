import React from 'react';

const EditProfile = ({user}) => (

  <div className="edit-profile">
    <h3>Edit Details</h3>
    {/* First Name Field */}
    <label className="edit-field">
      First name: {' '}
      <input 
      value={user.firstName} 
      onChange={this.onChangeFirstName}
      />
    </label>
    <br />
    {/* Last Name Field */}
    <label className="edit-field">
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
)

export default EditProfile;
