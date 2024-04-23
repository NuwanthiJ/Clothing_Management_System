import { useState } from 'react'
import './PMDashboard.css'
import Header from './PMHeader'
import Sidebar from './PMSidebar'
import Home from './PMHome'


function PMDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='pm-grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    
  )
}

export default PMDashboard