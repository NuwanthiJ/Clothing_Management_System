import React, { useState } from 'react';
import './Signup.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3000/api/user/`, {
        username,
        password,
        email,
      });

      if (response.status === 200) {
        alert('Registration successful!');
        // Redirect to login page or any other page after successful registration
      } else {
        setError('Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again later.');
    }
  };

  return (
    <div>
      <Header />
      <div className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group2">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="signup-input-box1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="signup-input-box2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="signup-input-box3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div>
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>

          <button type="submit" className="btnsignup">
            SignUp
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
