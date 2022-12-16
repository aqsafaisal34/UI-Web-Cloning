import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Card1Img from '../../assets/card1img.webp';
import Card2Img from '../../assets/card2img.webp';
import Card3Img from '../../assets/card3img.webp';
import Card4Img from '../../assets/card4img.webp';
import InvImg1 from '../../assets/InvImg1.webp';
import InvImg2 from '../../assets/InvImg2.webp';
import BackImg8 from '../../assets/backImg8.webp';
import Header from "../../components/header";
import Content from "../../components/Content";


function Buy() {
  return (
    <>
    <Header />
    <Container className='body-content'>
     <Row>
      <Col className='area'>
      <h2>Top areas by city</h2>
      </Col>
     </Row>
      <Row>
        <Col>
        <div className='button'>
        <Button variant="danger">Islamabad</Button>{' '}
        <Button variant="outline-dark">Karachi</Button>{' '}
        <Button variant="outline-dark">Lahore</Button>{' '}
        <Button variant="outline-dark">Multan</Button>{' '}
         <Button variant="outline-dark">Peshawar</Button>{' '}
       </div>
        </Col>
      </Row>
      <Row>
        <Col className='quantity'>
       <p>For Rent 2655 | <span>For Sale 3668</span></p>
        </Col>
      </Row>
      <Row className='cards'>
      <Col lg={3} class='col'>
      <Card style={{ width: '205px' }}>
      <Card.Img variant="top" src={Card1Img} className='img' />
      <Card.Body>
        <Card.Text>
          B-17
        </Card.Text>
        <hr />
        <p>14 on Rent | <span>233 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      <Col lg={3} class='col'>
      <Card style={{ width: '205px' }}>
      <Card.Img variant="top" src={Card1Img} className='img' />
      <Card.Body>
        <Card.Text>
          B-17
        </Card.Text>
        <hr />
        <p>14 on Rent | <span>233 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      <Col lg={3}>
      <Card style={{ width: '205px'  }}>
      <Card.Img variant="top" src={Card2Img} className='img'/>
      <Card.Body>
        
        <Card.Text>
         Sohaan Garden
        </Card.Text>
        <hr />
        <p>10 on Rent | <span>200 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      <Col lg={3}>
      <Card style={{ width: '205px'  }}>
      <Card.Img variant="top" src={Card3Img} className='img' />
      <Card.Body>
        
        <Card.Text>
         Bahria Avenue
        </Card.Text>
        <hr />
        <p>100 on Rent | <span>400 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      <Col lg={3} >
      <Card style={{  width: '205px'  }}>
      <Card.Img variant="top" src={Card4Img} className='img'/>
      <Card.Body>
        
        <Card.Text>
          Zamzama City
        </Card.Text>
          <hr />
        <p>25 on Rent | <span>130 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      </Row>
    <Row>
      <Col className='area'>
      <h2>Investment Projects to put your money in motion</h2>
      </Col>
     </Row>
     <Row className='cards'>
      <Col lg={4}>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={InvImg1} className='img' />
      <Card.Body>
        <Card.Text>
         Islamabad Grand Bazaar
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col lg={4}>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={InvImg2} className='img'/>
      <Card.Body>
        
        <Card.Text>
         Islamabad DownTown
        </Card.Text>
       
      </Card.Body>
    </Card>
      </Col>
      <Col lg={4}>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={InvImg1} className='img' />
      <Card.Body>
        
        <Card.Text>
        Karachi Bahria Town
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
     
      </Row>

   
    <Row>
      <Col className='area'>
      <h2>Area Guide</h2>
      </Col>
     </Row>
      <Row>
        <Col>
        <div className='button'>
        <Button variant="danger">Islamabad</Button>{' '}
        <Button variant="outline-dark">Karachi</Button>{' '}
        <Button variant="outline-dark">Lahore</Button>{' '}
        <Button variant="outline-dark">Multan</Button>{' '}
         <Button variant="outline-dark">Peshawar</Button>{' '}
       </div>
        </Col>
      </Row>
      <Row className='cards'>
      <Col lg={3}>
      <Card style={{width: '205px'}}>
      <Card.Img variant="top" src={Card1Img} className='img' />
      <Card.Body>
        <Card.Text>
          B-17
        </Card.Text>
        <hr />
        <p>14 on Rent | <span>233 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      <Col lg={3}>
      <Card style={{width: '205px'}}>
      <Card.Img variant="top" src={Card2Img} className='img'/>
      <Card.Body>
        
        <Card.Text>
         Sohaan Garden
        </Card.Text>
        <hr />
        <p>10 on Rent | <span>200 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      <Col lg={3}>
      <Card style={{width: '205px'}}>
      <Card.Img variant="top" src={Card3Img} className='img' />
      <Card.Body>
        
        <Card.Text>
         Bahria Avenue
        </Card.Text>
        <hr />
        <p>100 on Rent | <span>400 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      <Col lg={3}>
      <Card style={{width: '205px'}}>
      <Card.Img variant="top" src={Card4Img} className='img'/>
      <Card.Body>
        
        <Card.Text>
          Zamzama City
        </Card.Text>
          <hr />
        <p>25 on Rent | <span>130 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      <Col lg={3}>
      <Card style={{width: '205px'}}>
      <Card.Img variant="top" src={Card4Img} className='img'/>
      <Card.Body>
        
        <Card.Text>
          Zamzama City
        </Card.Text>
          <hr />
        <p>25 on Rent | <span>130 on Sale</span></p>
      </Card.Body>
    </Card>
      </Col>
      </Row>
      <Row>
        <Col>
          <img src={BackImg8} alt='' id='backImg' />
        </Col>
      </Row>
    </Container>
    <Content />
   
    </>
  )
}

export default Buy;


