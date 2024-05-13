// import { useState } from 'react'
import React from 'react'
import {Link} from 'react-router-dom';
import 
{BsGrid1X2Fill, BsFillArchiveFill}
 from 'react-icons/bs'
 import { FiLogOut } from "react-icons/fi";
 import { BsDatabaseFillAdd } from "react-icons/bs";
 import './PMSidebar.css'



function PMSidebar({openSidebarToggle, OpenSidebar}) {

  return (
    <aside id="pm-sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='pm-sidebar-title'>
            <div className='pm-sidebar-brand'>
                 Product Manager 
            </div>
            <span className='pm-icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='pm-sidebar-list'>
            
            <li className='pm-sidebar-list-item'>
            <Link to="/pm_dashboard">
                    <BsGrid1X2Fill className='pm-icon'/> Dashboard
            </Link>
            </li>
            
            
            <li className='pm-sidebar-list-item' >
            <Link to="/pmallproduct">
            <BsFillArchiveFill className='pm-icon'/> ALL Product
            </Link>
            </li>
            

            <li className='pm-sidebar-list-item'>
                <Link to="/addproduct">
                    <BsDatabaseFillAdd className='pm-icon'/> Add Product
                </Link>
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