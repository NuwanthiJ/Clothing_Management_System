import { useState } from 'react'
//import './PMDashboard.css'
import Header from './PHeader'
import Sidebar from './PSidebar'
import Home from './PHome'


function PDashboard() {
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

export default PDashboard