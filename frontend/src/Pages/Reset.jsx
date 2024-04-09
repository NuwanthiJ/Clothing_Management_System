import React, { useState } from 'react';
import './CSS/Reset.css';

function Reset() {
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setCofirmpassword] = useState('');
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (newpassword !== confirmpassword) {
      window.alert('New Password and Confirm Password must match');
      return;
    }
  
    const otpPattern = /^\d{4}$/;
    if (!otpPattern.test(otp)) {
      setError('OTP must be a 6-digit numeric code');
      window.alert('OTP must be a 6-digit numeric code');
      return;
    }
  
    console.log('Form submitted');
  };
  
  

  return (
    <div className="reset">
    <form onSubmit={handleSubmit}>
      <center>
        <h1>Forgot Password?</h1>

        <div className="reset-input-box2">
          <input
            type="password"
            placeholder="New Password"
            required
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <i className='bx bxs-lock' ></i>
        </div>

        <div className="reset-input-box3">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmpassword}
            onChange={(e) => setCofirmpassword(e.target.value)}
          />
          <i className='bx bxs-lock' ></i>
        </div>

        <button type="submit" className="btn">Send OTP</button>
        <br></br>
        <br></br>

        

        <div className="reset-input-box4">
          <input
            type="text"
            placeholder="OTP "
            required
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <i className='bx bxs-lock' ></i>
        </div>

        {error && <div className="reset-error">{error}</div>}

        <button type="submit" className="reset-btn">Confirm</button>

      </center>
    </form>
    </div>
    

  );
}

export default Reset;