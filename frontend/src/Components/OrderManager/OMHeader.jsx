import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function OMHeader({OpenSidebar}) {
  return (
    <header className='om-header'>
        <div className='om-menu-icon'>
            <BsJustify className='om-icon' onClick={OpenSidebar}/>
        </div>
        <div className='om-header-left'>
            <BsSearch  className='om-icon'/>
        </div>
        <div className='om-header-right'>
            <BsFillBellFill className='om-icon'/>
            <BsFillEnvelopeFill className='om-icon'/>
            <BsPersonCircle className='om-icon'/>
        </div>
    </header>
  )
}

export default OMHeader