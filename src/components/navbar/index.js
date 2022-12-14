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
    <div className="buttons">
      <Button variant="danger" id="login">
        Login
      </Button>
      <Button variant="danger" id="signup">
        SignUp
      </Button>
    </div>
  </div>
  )
}

export default Navbar;
