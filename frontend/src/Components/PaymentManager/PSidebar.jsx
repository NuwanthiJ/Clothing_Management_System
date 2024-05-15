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
 import './PSidebar.css'



function PSidebar({openSidebarToggle, OpenSidebar}) {

  return (
    <aside id="p-sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='p-sidebar-title'>
            <div className='p-sidebar-brand'>
                {/* <FaUserTie  className='pm-icon_header'/> Product Manager */} Payment Manager 
            </div>
            <span className='pm-icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='p-sidebar-list'>
            
            <li className='p-sidebar-list-item'>
            <Link to="/pdashboard">
                {/* <a href=""> */}
                    <BsGrid1X2Fill className='pm-icon'/> Dashboard
                {/* </a> */}
            </Link>
            </li>
            
            
            <li className='p-sidebar-list-item' >
            <Link to="/pallsale">
            <BsFillArchiveFill className='pm-icon'/> ALL Sales
            </Link>
            </li>
            

            <li className='p-sidebar-list-item'>
                <Link to="/padd">
                {/* <a href=""> */}
                    <BsDatabaseFillAdd className='pm-icon'/> Add Sales
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
            {/* <li className='p-sidebar-list-item'> */}
                {/* <a href=""> */}
                    {/* <BsFillGearFill className='pm-icon'/> Setting */}
                {/* </a> */}
            {/* </li> */}
            <li className='p-sidebar-list-item'>
            <Link to="/">
                    <FiLogOut className='pm-icon'/> Logout
            </Link>
            </li>
        </ul>
    </aside>
  )
}

export default PSidebar