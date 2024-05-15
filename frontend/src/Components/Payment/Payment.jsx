import React, { useState } from 'react';
import axios from 'axios';
import './Payment.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Payment() {
  const [formData, setFormData] = useState({
    name: '',
    postalCode: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation for postal code and email
      if (formData.postalCode.length !== 5) {
        alert('Postal code should be 5 digits.');
        return;
      }
      if (!formData.email.includes('@gmail.com')) {
        alert('Email should be a Gmail address.');
        return;
      }

      const response = await axios.post('http://localhost:3000/api/payment/', formData);
      console.log(response);
      if (response.status === 200) {
        alert('Data inserted successfully!');
        // Additional action after successful submission
      }
    } catch (error) {
      console.error(error);
      alert('Error inserting data');
    }
  };

  return (
    <div>
       <Header />
    

      <form onSubmit={handleSubmit} className="form1">
        <center>
          <h2 className="ptopic">
            <b>Billing Information</b>
          </h2>
        </center>
        <br />
        <b>Name:</b>
        <br />
        <input
          className="pinput"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <b>Postal Code:</b>
        <br />
        <input
          className="pinput"
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
        <br />
        <b>Address:</b>
        <br />
        <input
          className="pinput"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <br />
        <b>Email:</b>
        <br />
        <input
          className="pinput"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button className="pbutton" type="submit">
          <Link to="/card">Submit</Link>
        </button>
      </form>
      <Footer />
    </div>
  );
}
