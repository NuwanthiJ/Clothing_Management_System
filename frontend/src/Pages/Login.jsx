import React, { useState } from 'react';
import './CSS/Login.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      window.alert('Password must be at least 8 characters long');
      return;
    }

    console.log('Form submitted');
  };

  return (
    <center>
        <div className="login">
    <form onSubmit={handleSubmit}>
      
        <h1>Login</h1>
        <div className="login-input-box1">
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

        <div className="login-input-box2">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className='bx bxs-lock' ></i>
        </div>

        <div className="login-remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p><a href="/reset" className="login-forgotpwd">Forgot Password?</a></p>
          
        </div>
        <br></br>

        <button type="submit" className="login-btn">Login</button>

        <div className="login-register-link">
        <p>Don't have an account?<a href="/signup" className="login-register">Sign Up</a></p>

        </div>
      
    </form>
    </div>
    </center>
  );
}

export default Login;