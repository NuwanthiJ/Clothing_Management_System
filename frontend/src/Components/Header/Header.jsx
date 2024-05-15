import React, { useState,useEffect } from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import logo2 from '../Assets/logo2.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import admin from '../Assets/admin-3.png'



const Header = ({containerStyles}) => {

    const [menu,setMenu] = useState("home");
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const userId = localStorage.getItem('userId');
		try {
			const response = await fetch(`http://localhost:3000/api/item/${userId}`);
			if (!response.ok) {
				throw new Error('Failed to get cart items');
			}
			const data = await response.json();
			setCartItems(data.Item);
		} catch (error) {
			console.log(error);
		}
	};

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
            <Link to='/adminlogin'><img  src={admin} alt=" "/></Link>
            <Link to='/login'><button>LOGIN</button></Link>
            <Link to='/signup'><button >SIGN UP</button></Link>
            <Link to='/cart'><img className="cart" src={cart_icon} alt=" "/>
            </Link>
             <div className="nav-cart-count">{cartItems.length}</div> 

         </div>
      
    </div>
  )
}

export default Header

