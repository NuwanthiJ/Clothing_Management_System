// import { useState } from 'react'
import React from 'react'
import {Link} from 'react-router-dom';
import 
{BsGrid1X2Fill, BsFillArchiveFill,  BsFillGearFill}
 from 'react-icons/bs'
 import { FiLogOut } from "react-icons/fi";
//  import { BsDatabaseFillAdd } from "react-icons/bs";
//  import { MdLocalOffer } from "react-icons/md";
//  import { TbReportSearch } from "react-icons/tb";
//  import { HiCurrencyDollar } from "react-icons/hi";
//  import { FaUserTie } from "react-icons/fa";
import './USidebar.css'
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";





function USidebar({uopenSidebarToggle, UOpenSidebar}) {

  return (
    <aside id="u-sidebar" className={uopenSidebarToggle ? "sidebar-responsive": ""}>
        <div className='u-sidebar-title'>
            <div className='u-sidebar-brand'>
                {/* <FaUserTie  className='pm-icon_header'/> Product Manager */} User Manager 
            </div>
            <span className='pm2-icon close_icon' onClick={UOpenSidebar}>X</span>
        </div>

        <ul className='u-sidebar-list'>
            
            <li className='u-sidebar-list-item'>
            <Link to="/udashboard">
                {/* <a href=""> */}
                    <BsGrid1X2Fill className='pm2-icon'/> Dashboard
                {/* </a> */}
            </Link>
            </li>
            
            
            <li className='u-sidebar-list-item' >
            <Link to="/uallusers">
            <BsFillArchiveFill className='pm2-icon'/> ALL Users
            </Link>
            </li>
            

  

            {/* <li className='pm-sidebar-list-item'>
                
                    <HiCurrencyDollar className='pm-icon'/> Salles
                
            </li>
            <li className='pm-sidebar-list-item'>
                
                    <MdLocalOffer className='pm-icon'/> Add Offers/Promotions
                
            </li>
            <li className='pm-sidebar-list-item'>
                
                    <TbReportSearch className='pm-icon'/> Reports
                
            </li> */}
          <li className='u-sidebar-list-item'>
          <Link to="/reportupload">
            <BsFileEarmarkArrowUpFill className='pm2-icon' /> Report Upload
          </Link>
        </li>
            <li className='u-sidebar-list-item'>
            <Link to="/">
                    <FiLogOut className='pm2-icon'/> Logout
            </Link>
            </li>
        </ul>
    </aside>
  )
}

export default USidebar