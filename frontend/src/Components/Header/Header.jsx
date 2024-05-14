import React, { useState } from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import logo2 from '../Assets/logo2.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'



const Header = ({containerStyles}) => {

    const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
         <div className="nav-logo">
            <img src={logo2} alt=" " />
         </div>

         <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>HOME</Link></li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>WOMEN'S WEAR</Link></li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>MEN'S WARE</Link></li>           
         </ul>
         <div className="nav-login-cart">
            <Link to='login'><button >LOGIN</button></Link>
            <Link to='signup'><button >SIGN UP</button></Link>
            <Link to='cart'><img className="cart" src={cart_icon} alt=" "/></Link>
            <div className="nav-cart-count">0</div>

         </div>
      
    </div>
  )
}

export default Header

