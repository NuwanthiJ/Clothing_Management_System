import React, { useState } from 'react';
import './CSS/Signup.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nic, setNIC] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    // NIC number validation
    const nicRegex = /^(?:\d{9}[vV]|\d{12})$/;
    if (!nicRegex.test(nic)) {
      setError('Invalid NIC number');
      return;
    }
    window.alert('Signup successful!');

  
    console.log('Form submitted');
  };
  
  

  return (
    <center>
    <div className='signup'>
    <form onSubmit={handleSubmit}>
  
        <h1>Sign Up</h1>
        <div className="signup-input-box1">
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

      

        <div className="signup-input-box3">
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <i className='bx bxs-phone'></i>
        </div>

        <div className="signup-input-box6">
          <input
            type="password"
            placeholder="NIC Number"
            required
            value={nic}
            onChange={(e) => setNIC(e.target.value)}
          />
          <i className='bx bxs-lock' ></i>
        </div>

        <div className="signup-input-box4">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className='bx bxs-lock' ></i>
        </div>

        <div className="signup-input-box5">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <i className='bx bxs-lock' ></i>
        </div>

      

        {error && <div className="error">{error}</div>}

        <button type="submit" className="SignUp-btn">Sign Up</button>
        <br></br>

        <div className="login-link">
          <p>Already have an account?&nbsp;&nbsp;&nbsp;<a href="/login" className="login">Login</a></p>
        </div>
      
    </form>
    </div>
    </center>
  );
}

export default SignUp;