import React, {useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import './AdminLogin.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

function AdminLogin  ()  {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      console.log(email + password);
        e.preventDefault()
        axios.post("http://localhost:3000/adminlogin", { email, password })
        .then(result => {
            console.log(result)

            if(result.data === "1"){
              navigate("/pm_dashboard")
            
            }else if(result.data === "2"){
              navigate("/om_dashboard")

            }else if(result.data === "3"){
              navigate("/pdashboard")

            }else if(result.data === "7"){
              navigate("/udashboard")
            }
            else{
                navigate("/")
                alert("You are not allowed login to the administration")

            }
        })
        .catch(err => console.log(err))
    }
   

  return (
    <div>
    <Header/>
    <div className='adminLogin'>
    <form onSubmit={handleSubmit}>
    <center><h3>Admin Sign In</h3></center>
  <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control" name="admin_username" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required/>
  </div>


  <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" name="admin_password" onChange={(e) => setPassword(e.target.value)} placeholder="password" required/>
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
        <label class="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>
  </div>


  <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-warning btn-block mb-4">Sign in</button>
</form>
    </div>
    <Footer/>
    </div>
  )
}

export default AdminLogin