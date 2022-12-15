import React from 'react';
import './style.css';
import logo from "../../assets/logo-transparent.svg";
import Button from "react-bootstrap/Button";

function Navbar() {
  return (
    <div className="head-sec1">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <div id='auth-btn'>
      <Button variant="danger" id="login" size='md'>
        Login
      </Button>
      <Button variant="danger" id="signup" size='md'>
        SignUp
      </Button>
    </div>
  </div>
  )
}

export default Navbar;
