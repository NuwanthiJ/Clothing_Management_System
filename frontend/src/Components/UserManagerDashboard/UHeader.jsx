import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsGearFill, BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './UHeader.css';

function UHeader({ openSidebar }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search functionality here
  };

  return (
    <header className='pm-header'>
      <div className='pm-menu-icon'>
        <BsJustify className='pm-icon' onClick={openSidebar} />
      </div>
      <div className='pm-header-left'>
        <BsSearch className='pm-icon' />
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='pm-header-right'>
        <BsFillBellFill className='pm-icon' />
        <BsFillEnvelopeFill className='pm-icon' />
        <BsGearFill className='pm-icon' />
        {/* Change the profile icon to a Link component */}
        <Link to="/uprofile">
          <BsPersonFill className='pm-icon' />
        </Link>
      </div>
    </header>
  );
}

export default UHeader;
