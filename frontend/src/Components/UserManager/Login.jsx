import React, { useState } from 'react';
import './Login.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import default styles
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(`http://localhost:3000/api/login`, {
        email,
        password,
      });
  
      if (response.status === 200) {
        // Authentication successful
        toast.success('Login successful!');
        // Redirect to the dashboard or any other page
      } else {
        // Authentication failed
        // Handle authentication failure
        toast.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error
      toast.error('Invalid email or password.');
    }
  };
  
  return (
    <div>
      <Header />
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              className="login-input-box1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="login-input-box3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <p>Don't have an account? <Link to="/signup">Register here</Link></p>
          </div>

          <button type="submit" className="btnlogin">
            <Link to="/" >Login</Link>
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer /> {/* Add ToastContainer */}
    </div>
  );
}

export default Login;
