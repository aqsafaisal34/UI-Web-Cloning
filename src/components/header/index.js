import React from 'react';
import './style.css';
import logo from "../../assets/logo-transparent.svg";
import Button from 'react-bootstrap/Button'
import background from '../../assets/backimage1.jpeg';

function Header() {
  return (
   
    <div className='header'>
     <div id='bg-image' style={{ backgroundImage: `url(${background})`,
       backgroundRepeat: 'no-repeat',
       height:'100vh' ,
       backgroundSize:'cover',
       width:'100%',
       position:'fixed'
       }}>

       
     <div className='head-sec1'>
      <div className='logo'>
        <img src={logo} alt=''/>
      </div>
      <div className='buttons'>
        <Button variant='danger'id='login' >Login</Button>
        <Button variant='danger' id='signup'>SignUp</Button>
      </div>
     </div>
     <p>Pakistan's 1st Online Real Estate Marketplace</p>
     <div className='buttons'>
    <Button variant="outline-light" size="md">Rent</Button>{' '}
    <Button variant="outline-light" size="md">Buy</Button>{' '}
    <Button variant="outline-light" size="md">Invest</Button>{' '}
    </div>
    <div className='input-box'>
      <input type='text' placeholder='Enter your Location' />
    </div>
    <div className='nav-text'>
      <h5>Don't want the hassle?</h5>
      <h2> Let us handle everything for you! </h2>
      <Button variant="danger" size="lg">Wanted</Button>{' '}

    </div>
    </div>
    </div>
   
  )
   
}

export default Header;
