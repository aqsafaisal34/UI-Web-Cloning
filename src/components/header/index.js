import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import background from "../../assets/images3.jpeg";
import {useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar'

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        id="bg-image"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
          maxWidth: "100%",
         
        }}
      >
       <Navbar />
        <p id='text'>Pakistan's 1st Online Real Estate Marketplace</p>
        <div className="nav-button">
          <Button variant="outline-light" size="md" onClick={() => navigate( '/')}>
          Buy
          </Button>{" "}
          <Button variant="outline-light" size="md" onClick={() => navigate( '/')}>
          Rent
          </Button>{" "}
          <Button variant="outline-light" size="md" onClick={() => navigate( '/invest')}>
            Invest
          </Button>{" "}
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your Location" />
        </div>
        <div className="nav-text">
          <h5 id='line'>Don't want the hassle?</h5>
          <h1 id='line2'> Let us handle everything for you! </h1>
          <Button variant="danger" size="lg">
            Wanted
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
