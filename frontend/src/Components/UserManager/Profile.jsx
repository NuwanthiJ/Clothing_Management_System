import React, { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';

const Profile = ({ userId }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (newPassword !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }

      const updatedUserData = {
        email,
        password,
        newPassword,
      };

      const response = await axios.put(`http://localhost:3000/api/user/${email}`, updatedUserData);

      console.log('Response:', response.data);
      alert('Changes saved successfully!');
      
      setEmail('');
      setPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error during form submission:', error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Failed to save changes. Please try again later.');
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="profile">
        <h2>Edit Profile</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="profile-input-box2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Current Password:</label>
            <input
              type="password"
              id="password"
              className="profile-input-box3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              className="profile-input-box4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              id="confirmPassword"
              className="profile-input-box5"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btnsubmitprofile">Save Changes</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
