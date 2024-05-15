import React from 'react';
import UHeader from './UHeader';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './UDashboard.css';

function UDashboard() {
  return (
    <div>
      <UHeader />
      <div className="card-deck">
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">All Users</p>
            <Link to="/uallusers" className="btn btn-primary">All Users</Link>
          </div>
        </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Profile</p>
            {/* Link to the UserProfile page */}
            <Link to="/uprofile" className="btn btn-primary">My Profile</Link>
          </div>
        </div>
        <div className="card bg-success">
          <div className="card-body text-center">
            <p className="card-text">Report</p>
            {/* Link to the ReportUpload page */}
            <Link to="/ureport" className="btn btn-primary">Report Upload</Link>
          </div>
        </div>
        <div className="card bg-danger">
          <div className="card-body text-center">
            <p className="card-text">Logout</p>
            {/* Link to the home page */}
            <Link to="/" className="btn btn-primary">Log Out</Link>
          </div>
        </div>
      </div>
      {/* Short description */}
      <div className="short-description">
        <p>
MMHCl, or Multi-Modal Human-Computer Interaction, refers to a system that integrates various modes of interaction between humans and computers. It encompasses technologies like voice recognition, gesture control, touch interfaces, and more to create a seamless and intuitive user experience. MMHCl aims to enhance user interaction with digital devices by leveraging multiple input modalities, making interaction more natural, efficient, and inclusive.</p>
      </div>
      {/* Footer */}
      <footer className="footerx">
        <div className="container">
          <p className="text-muted">© 2024 MMHCL Clothing Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default UDashboard;
