import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function Content() {
  return (
    <div>
      <Container className="Content">
        <Row>
          <Col>
            <h6>Looking for popular cities to get properties in?</h6>
            <p>
              Here's a list of houses flats plots and rooms in all bustling
              metropolitan cities.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <ul>
              <li className="bold">Home</li>
              <li>Home for sale in Islamabad</li>
              <li>Home for sale in Rawalpindi</li>
              <li>Home for sale in Lahore</li>
              <li>Home for sale in Karachi</li>
              <li>Home for sale in Peshawar</li>
              <li>Home for sale in Faisalabad</li>
              <li>Home for sale in Multan</li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul>
              <li className="bold">Flats & Appartments</li>
              <li>Flats for sale in Islamabad</li>
              <li>Flats for sale in Rawalpindi</li>
              <li>Flats for sale in Lahore</li>
              <li> Flats for sale in Karachi</li>
              <li>Flats for sale in Peshawar</li>
              <li>Flats for sale in Faisalabad</li>
              <li>Flats for sale in Multan</li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul>
              <li className="bold">Plots</li>
              <li>Plots for sale in Islamabad</li>
              <li>Plots for sale in Rawalpindi</li>
              <li>Plots for sale in Lahore</li>
              <li> Plots for sale in Karachi</li>
              <li>Plots for sale in Peshawar</li>
              <li>Plots for sale in Faisalabad</li>
              <li>Plots for sale in Multan</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li className="bold">Rooms</li>
              <li>Rooms for sale in Islamabad</li>
              <li>Rooms for sale in Rawalpindi</li>
              <li>Rooms for sale in Lahore</li>
              <li> Rooms for sale in Karachi</li>
              <li>Rooms for sale in Peshawar</li>
              <li>Rooms for sale in Faisalabad</li>
              <li>Rooms for sale in Multan</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h6>Looking for options of your next home?</h6>
            <p>Here's the list of popular locations in our top cities.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <ul>
              <li className="bold">Islamabad</li>
              <li>House for sale in G-13 Islamabad</li>
              <li> House for sale in DHA Islamabad</li>
              <li>Islamabad House for sale in Soan Garden</li>
               <li>Islamabad House for sale in DHA Phase 2</li> 
               <li>Islamabad House for sale in Bahria Town Islamabad</li>
              <li> Islamabad House for sale in I-8 </li>
              <li>Islamabad House for sale in B-17</li>
              <li> View All Areas in Islamabad</li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul>
              <li className="bold">Rawalpindi</li>
                <li>House for sale in G-13 Rawalpindi</li>
              <li> House for sale in DHA Rawalpindi</li>
              <li>Rawalpindi House for sale in Soan Garden</li>
               <li>Rawalpindi House for sale in DHA Phase 2</li> 
               <li>Rawalpindi House for sale in Bahria Town Rawalpindi</li>
              <li> Rawalpindi House for sale in I-8 </li>
              <li>Rawalpindi House for sale in B-17</li>
              <li> View All Areas in Rawalpindi</li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul>
              <li className="bold">Lahore</li>
              <li>House for sale in G-13 Lahore</li>
              <li> House for sale in DHA Lahore</li>
              <li>Lahore House for sale in Soan Garden</li>
               <li>Lahore House for sale in DHA Phase 2</li> 
               <li>Lahore House for sale in Bahria Town Lahore</li>
              <li> Lahore House for sale in I-8 </li>
              <li>Lahore House for sale in B-17</li>
              <li> View All Areas in Lahore</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li className="bold">Karachi</li>
              <li>House for sale in G-13 Karachi</li>
              <li> House for sale in DHA Karachi</li>
              <li>Karachi House for sale in Soan Garden</li>
               <li>Karachi House for sale in DHA Phase 2</li> 
               <li>Karachi House for sale in Bahria Town Karachi</li>
              <li> Karachi House for sale in I-8 </li>
              <li>Karachi House for sale in B-17</li>
              <li> View All Areas in Karachi</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
