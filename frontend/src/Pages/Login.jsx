import React from 'react'



const Login = () => {
  // This is a temporary login function
  const handleLogin = () => {
    localStorage.setItem("userId", "user2");
    window.location.reload();
  };
  //
  return (
    <div>  
      <h1>login page</h1>
      <button className="loginbtn"onClick={handleLogin}>LOGIN
      </button>
    </div>
  );
};

export default Login
