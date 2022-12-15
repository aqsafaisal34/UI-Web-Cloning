import React from 'react';
import './style.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";






function Footer() {
  return (
    <div>
     <hr />
     <Container fluid className='footer' >
    
      <Row>
        <Col lg={3} md={6} sm={12} className='vline' >
        <h6>About</h6>
        <button>Our Story</button>
        <button>Our Blogs</button>
        <button>Careers</button>
        <button>Gurus</button>
       </Col>
        <Col lg={3} md={6} sm={12} className='vline'>
        <h6>Quick Links</h6>
        <button>Projects in Pakistan</button>
        <button>Projects in Islamabad</button>
        <button>Projects in Karachi</button>
        <button>Projects in Lahore</button>
        <button>Projects in Peshawar</button>
        </Col>
        <Col lg={3} md={6} sm={12} className='vline'>
        <h6>Contact Us</h6>
        <p>info@graana.com</p>
        <p>111-555-555</p>
       <p>Lahore | Karachi |Islamabad | Rawalpindi |
        Faisalabad | Multan | Quetta</p>

        </Col>
        <Col lg={3} md={6} sm={12}>
        <h6>Follow</h6>
       
        <h6>Search Property by Id</h6>
        <input type='text' placeholder='Property Id' id='input-box' />

        </Col>
      </Row>
      <Row>
        <Col lg={12}>
       <p id='copyright'>Copyright @2022 FemSol</p>
        </Col>
      </Row>
     </Container>
    </div>
  )
}

export default Footer;
