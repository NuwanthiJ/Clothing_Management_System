import React, { useState } from 'react';

import './CSS/Profile.css';

function Profile() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [npassword, setNewpassword] = useState('');
  const [cpassword, setConfirmpassword] = useState('');
  const [phone, setPhone] = useState('');



  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    console.log('Form submitted');
  };

  
  return (
    <div className="profile">
    <form onSubmit={handleSubmit}>
    <center>
      <h1>Edit Profile</h1>
      <div className="profile-input-box1">
        <input
          className="uname"
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <i className='bx bxs-user-circle' ></i>   
      </div>

      <div className="profile-input-box2">
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className='bx bxs-lock' ></i>
      </div>

      <div className="profile-input-box3">
        <input
          type="npassword"
          placeholder="New password"
          required
          value={npassword}
          onChange={(e) => setNewpassword(e.target.value)}
        />
        <i className='bx bxs-lock' ></i>
      </div>

      <div className="profile-input-box4">
        <input
          type="cpassword"
          placeholder="Confirm password"
          required
          value={cpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <i className='bx bxs-lock' ></i>
      </div>

      <div className="profile-input-box5">
        <input
          type="phone"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <i className='bx bxs-lock' ></i>
      </div>

      <button type="submit" className="profile-btn">submit</button>

      {error && <div className="profile-error">{error}</div>}
    </center>
    </form>
    </div>
      
    
  );
}

export default Profile;