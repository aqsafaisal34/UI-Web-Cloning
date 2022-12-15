import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='sidebar-icon'>
     <button onClick={handleShow}>
     <FontAwesomeIcon
                    icon={faBars}
                    className="Icon"
                    active
                    size="lg"
                  />
     </button>
    
    </div>
    <div className='sideBar'>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id='Modal'
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
          <nav className='nav'>
           <ul>
            <li><Link to='/'>Home</Link></li> 
            <li><Link to='/'>Add Property</Link></li>
            <li><Link to='/'>Projects</Link></li>
            <li><Link to='/'>Wanted</Link></li>
            <li><Link to='/'>Blog</Link></li>
            <li><Link to='/'>Contact Us</Link></li>
            <li><Link to='/'>Agents</Link></li>
             <li><Link to='/'>Our Story</Link></li>
             <li><Link to='/'>Careers</Link></li>
              <li><Link to='/'>Log In</Link></li>
               <li><Link to='/'>Sign Up</Link></li>
           </ul>
          </nav>
        </Modal.Body>
       
      </Modal>

    </div>
    </>
  )
}

export default Sidebar;
