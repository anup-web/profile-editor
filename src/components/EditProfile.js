import React from 'react';

const EditProfile = ({
  user,
  onChangeFirstName,
  onChangeLastName,
  onChangeProfileImage
  }) => (

  <div className="edit-profile">
    <h3>Edit Details</h3>

    {/* First Name Field */}
    <div className="edit-field">
      <label>
        First name: {' '}
        <input 
        value={user.firstName} 
        onChange={onChangeFirstName}
        />
      </label>
    </div>
    <br />

    {/* Last Name Field */}
    <div className="edit-field">
      <label className="edit-field">
        Last name: {' '}
        <input 
        value={user.lastName} 
        onChange={onChangeLastName}
        />
      </label>
    </div>
    <br />

    {/* Profile Image Field */}
    <div className="edit-field">
      <label>
        Profile Iimage URL: {' '}
        <input 
        value={user.profileImage} 
        onChange={onChangeProfileImage}
        />
      </label>
    </div>
  </div>   
)

export default EditProfile;
