import React from 'react';
import './UProfile.css';
import UHeader from './UHeader';

function UProfile() {
  return (
    <div>
      <UHeader />
      <div className="center">
        <div className="card1">
          {/* <img src="/w3images/team2.jpg" alt="John" style={{ width: '100%' }} /> */}
          <h1>John Doe</h1>
          <p className="titlename">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div style={{ margin: '24px 0' }}>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
          <p><button className='contactbtn'>Contact</button></p>
        </div>
      </div>
    </div>
  );
}

export default UProfile;
