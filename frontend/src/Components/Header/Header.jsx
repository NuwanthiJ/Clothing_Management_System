import React, { useState } from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Header = ({containerStyles}) => {

    const [menu,setMenu] = useState("home");

  return (
   <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
    <div className="navbar px-4 flexBetween py-3 max-xs:px-2">
         <div className="nav-logo">
            <img src={logo} alt=" " />
         </div>

         <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>HOME</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>WOMEN'S WEAR</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>MEN'S WARE</Link>{menu==="men"?<hr/>:<></>}</li>           
         </ul>
         <div className="nav-login-cart">
            <Link to='login'><button className="loginbtn">LOGIN</button></Link>
            <Link to='signup'><button className="signupbtn">SIGN UP</button></Link>
            <Link to='cart'><img src={cart_icon} alt=" "/></Link>
            <div className="nav-cart-count">0</div>

         </div>
      
    </div>
    </header>
  )
}

export default Header
