// import { useState } from 'react'
import React from "react";
import { Link } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGearFill,
} from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
//  import { FaUserTie } from "react-icons/fa";
import "./OMSidebar.css";
import { useOMDashboardStore } from "../../store/useOMDashboardStore";

function OMSidebar({ openSidebarToggle, OpenSidebar }) {
  // Get the state and actions from the store
  const { setSelectedTab } = useOMDashboardStore((state) => ({
    setSelectedTab: state.setSelectedTab,
  }));
  //
  return (
    <aside
      id="om-sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="om-sidebar-title">
        <div className="om-sidebar-brand">
          {/* <FaUserTie  className='om-icon_header'/> Order Manager */} Order
          Manager
        </div>
        <span className="om-icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="om-sidebar-list">
        <Link
          to="/om_dashboard?tab=Dashboard"
          onClick={() => setSelectedTab("Dashboard")}
        >
          <li className="om-sidebar-list-item">
            <BsGrid1X2Fill className="om-icon" /> Dashboard
          </li>
        </Link>

        <Link
          to="/om_dashboard?tab=Cart-Item-Details"
          onClick={() => setSelectedTab("Cart Item Details")}
        >
          <li className="om-sidebar-list-item">
            <BsFillArchiveFill className="om-icon" /> Cart Item Details
          </li>
        </Link>

        <Link
          to="/om_dashboard?tab=Order-History"
          onClick={() => setSelectedTab("Order History")}
        >
          <li className="om-sidebar-list-item">
            <BsDatabaseFillAdd className="om-icon" /> Order History
          </li>
        </Link>

        {/* <li className='pm-sidebar-list-item'>
                
                    <HiCurrencyDollar className='pm-icon'/> Salles
                
            </li>
            <li className='pm-sidebar-list-item'>
                
                    <MdLocalOffer className='pm-icon'/> Add Offers/Promotions
                
            </li>
            <li className='pm-sidebar-list-item'>
                
                    <TbReportSearch className='pm-icon'/> Reports
                
            </li> */}
        {/*<li className='om-sidebar-list-item'>}
                 <a href=""> 
                    <BsFillGearFill className='om-icon'/> Setting
                </a> 
        </li>*/}
        <li className="om-sidebar-list-item">
          <Link to="/">
            <FiLogOut className="om-icon" /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default OMSidebar;
