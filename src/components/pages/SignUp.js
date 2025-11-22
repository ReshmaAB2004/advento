import React from 'react';
import '../../App.css';


export default function SignUp() {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/img-8.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px"
      }}
    >

      
      <div className="signup-box">
        <form className="signup-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
