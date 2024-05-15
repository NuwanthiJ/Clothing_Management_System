import React, { useEffect, useState, useRef } from 'react';
import Sidebar from './USidebar';
import Header from './UHeader';
import axios from 'axios';
import { FaDownload } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; // Import jsPDF for PDF generation
import './UAllUsers.css';

function UAllUsers() {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState(1);
  const [searchEmail, setSearchEmail] = useState('');
  const pdfRef = useRef(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/user');
      if (response.status === 200) {
        setUsers(response.data);
        setUserID(response.data.length + 1);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/user/${id}`);
      if (response.status === 200) {
        getUsers();
        console.log('User deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAddUser = async () => {
    const newUser = {
      userName: 'New User',
      email: 'newuser@example.com',
      password: 'password',
    };
    try {
      const response = await axios.post('http://localhost:3000/api/user', newUser);
      if (response.status === 200) {
        getUsers();
        console.log('User added successfully');
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleSearch = () => {
    const filteredUsers = users.filter((user) =>
      user.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const generatePDF = () => {
    const input = pdfRef.current.querySelector('.user-table-container');
  
    // Adjust PDF page size based on the content size
    const pdfWidth = input.offsetWidth;
    const pdfHeight = input.offsetHeight;
  
    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);
  
      // Add an image of the rendered HTML to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
      // Save the PDF with a custom file name and add animation effects
      const fileName = 'user_report.pdf';
      pdf.save(fileName);
  
      // Display a success message with animation
      const successMessage = document.createElement('div');
      successMessage.textContent = `PDF report generated and downloaded: ${fileName}`;
      successMessage.classList.add('success-message');
  
      document.body.appendChild(successMessage);
  
      setTimeout(() => {
        successMessage.classList.add('fade-out');
        setTimeout(() => {
          document.body.removeChild(successMessage);
        }, 1000); // Remove the success message after animation completes
      }, 3000); // Show the success message for 3 seconds
    });
  };
  
  return (
    <div>
      <div className="App">
        <div className="uall-grid-container">
          <Header />
          <Sidebar />

          <div className="display-container" ref={pdfRef}>
            <h3 className="report-heading">MMHCL Clothing Company - Monthly User Report</h3>
            <div className="userSearch">
              <input
                type="search"
                className="productSearchInput"
                id="search"
                placeholder="Search by Email"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className="user-table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>User ID</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th style={{ textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{`U${(index + 1).toString().padStart(3, '0')}`}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>
                        <button onClick={() => deleteUser(user._id)} className="u-delete-btn">
                          <RiDeleteBin6Line />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Add PDF export button */}
            <div className="report-button-container">
              <button className="ureport" onClick={generatePDF}>
                <FaDownload /> Generate PDF Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UAllUsers;
