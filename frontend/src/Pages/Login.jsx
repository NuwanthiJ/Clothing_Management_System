//import './App.css';

function login() {
  
  return (
    <form class="form" action="">
      <center>
      <h1>Login</h1>
      <div class="input-box1">
        
        <input class="uname" type="text" placeholder="Username" required/>
        <i class='bx bxs-user-circle' ></i>   
           </div>

      <div class="input-box2">
        <input type="text" placeholder="Password" required/>
        <i class='bx bxs-lock' ></i>
      </div>

      <div class="remember-forgot">
       <label><input type="checkbox" /> Remember me</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <a href="#">Forgot Password?</a>
      </div>
      <button type="submit" class="btn">Login</button>

      <div class="register-link">
        <p>Don't have an account?<a href="#">Register</a></p>
        
      </div>

      </center>
      
    </form>
  );
  
}

export default login;
