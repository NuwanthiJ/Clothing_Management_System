// import { useState } from 'react'
import React from 'react'
import {Link} from 'react-router-dom';
import 
{BsGrid1X2Fill, BsFillArchiveFill,  BsFillGearFill}
 from 'react-icons/bs'
 import { FiLogOut } from "react-icons/fi";
 import { BsDatabaseFillAdd } from "react-icons/bs";
 import { MdLocalOffer } from "react-icons/md";
 import { TbReportSearch } from "react-icons/tb";
 import { HiCurrencyDollar } from "react-icons/hi";
//  import { FaUserTie } from "react-icons/fa";
 import './PMSidebar.css'



function PMSidebar({openSidebarToggle, OpenSidebar}) {

  return (
    <aside id="pm-sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='pm-sidebar-title'>
            <div className='pm-sidebar-brand'>
                {/* <FaUserTie  className='pm-icon_header'/> Product Manager */} Product Manager 
            </div>
            <span className='pm-icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='pm-sidebar-list'>
            
            <li className='pm-sidebar-list-item'>
            <Link to="/pm_dashboard">
                {/* <a href=""> */}
                    <BsGrid1X2Fill className='pm-icon'/> Dashboard
                {/* </a> */}
            </Link>
            </li>
            
            
            <li className='pm-sidebar-list-item' >
            <Link to="/pmallproduct">
            <BsFillArchiveFill className='pm-icon'/> ALL Product
            </Link>
            </li>
            

            <li className='pm-sidebar-list-item'>
                <Link to="/addproduct">
                {/* <a href=""> */}
                    <BsDatabaseFillAdd className='pm-icon'/> Add Product
                {/* </a> */}
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
            <li className='pm-sidebar-list-item'>
                {/* <a href=""> */}
                    <BsFillGearFill className='pm-icon'/> Setting
                {/* </a> */}
            </li>
            <li className='pm-sidebar-list-item'>
            <Link to="/">
                    <FiLogOut className='pm-icon'/> Logout
            </Link>
            </li>
        </ul>
    </aside>
  )
}

export default PMSidebar