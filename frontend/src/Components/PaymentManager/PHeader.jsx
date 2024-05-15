import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function PHeader({OpenSidebar}) {
  return (
    <header className='pm-header'>
        <div className='pm-menu-icon'>
            <BsJustify className='pm-icon' onClick={OpenSidebar}/>
        </div>
        <div className='pm-header-left'>
            <BsSearch  className='pm-icon'/>
        </div>
        <div className='p-header-right'>
            <BsFillBellFill className='pm-icon'/>
            <BsFillEnvelopeFill className='pm-icon'/>
            <BsPersonCircle className='pm-icon'/>
        </div>
    </header>
  )
}

export default PHeader