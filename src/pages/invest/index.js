import React from "react";
import "./style.css";
import Logo2 from "../../assets/download.png";
import Box1 from "../../assets/box1.webp";
import Box2 from "../../assets/box2.webp";
import Box3 from "../../assets/box3.webp";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Invest() {
  return (
    <>
      <div className="sticky">
        <div className="head-sec1">
          <div className="logo2">
            <img src={Logo2} alt="" width="180px" height="60px"/>
          </div>
          <div className="buttons">
            <Button variant="danger" id="login" size="lg">
              Login
            </Button>
            <Button variant="danger" id="signup" size="lg">
              SignUp
            </Button>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col id="invest-text">
            <h2>Best Investment in Pakistan</h2> <br />
            <p>100% refundable, safe and secure investments</p>
            <p>Our criteria to choose best investment projects</p> <br />
            <h6>Ownership & Approvals</h6>
            <p>
              Real estate dealings may be fraught with difficulties and legal
              concerns based on various factors. Before making an investment, it
              is critical to verify that the land has been properly and
              completely acquired, and all necessary approvals have been
              processed. At Imarat, we focus on risk assessment and mitigation
              through intensive due diligence that drives the highest levels of
              compliance in the industry - our trademark.
            </p>
            <h6>Demand & Delivery/h6</h6>
            <p>
              The secret to success in commercial projects is straightforward -
              hosting the right mix of brands to best satisfy the flourishing
              appetites of Pakistan’s fast-growing & increasingly prosperous
              population. To maximise the revenue potential of each project, a
              thorough commercial feasibility, including market analysis and
              space planning, is critical. Our Group has been delivering real
              estate excellence in the UK and Pakistan for more than 15 years
              and our expertise lies in real estate development, leasing and
              management. Our local and international corporate leasing teams
              begin working on a project while it is still at the concept stage,
              in order to attract the very best blend of local & international
              brands. Our aim is to create iconic commercial projects that
              become desirable destinations with an enduring appeal.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Find Real Estate Projects in Pakistan</h5>
            <p>Discover ongoing and completed projects in just one click</p>
            <p>Showing 1 - 14 project(s) of 14 in 'Pakistan'</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Projects</h3>
          </Col>
        </Row>
        <Row>
          <div class="box">
            <Col lg={6} md={12} sm={12}>
              <img src={Box1} alt="" width="550px" height="400px" />
            </Col>
            <Col lg={4} md={12} sm={12}>
              <h4>Grand Bazaar</h4>
              <p>Islamabad</p>
              <p>
                GRAND BAZAR Blending the classic with the contemporary, the
                Grand Bazaar is a lively marketplace that offers the city’s
                residents and tourists an enthralling experience of shopping,
                entertainment, and dining. Walk through the glittering Grand
                Bazaar and enjoy the adventure of shopping in the setting of a
                traditional souk. It’s where you will discover rich tapestries
                and carpets, intricate handicrafts, eclectic
              </p>
              <h6>PKR 76.5 lac - 1.52 crore</h6>
              <Button variant="light" size="lg">
                Call Now
              </Button>
              <Button variant="danger" size="lg">
                Inquire
              </Button>
            </Col>
          </div>

          <Col lg={2}></Col>
        </Row>
        <Row>
          <div class="box">
            <Col lg={6} md={12} sm={12}>
              <img src={Box2} alt="" width="550px" height="400px" />
            </Col>
            <Col lg={4} md={12} sm={12}>
              <h4>Bavylon</h4>
              <p>DHA,Multan</p>
              <p>
                The BAVYLON is an icon of Multan. Keeping the old Multan alive
                in concept and aesthetic, Bavylon will become a contemporary
                landmark of the city, a corporate and retail powerhouse offering
                the best in hospitality as well. A marvel of engineering and a
                testament to Multan's heritage and innovation, BAVYLON will be
                IMARAT Group’s flagship and forerunner project in Pakistan’s 5th
                most populous city.
              </p>
              <h6>PKR 76.5 lac - 1.52 crore</h6>
              <Button variant="light" size="lg">
                Call Now
              </Button>
              <Button variant="danger" size="lg">
                Inquire
              </Button>
            </Col>
          </div>

          <Col lg={2}></Col>
        </Row>
        <Row>
          <div class="box">
            <Col lg={6} md={12} sm={12}>
              <img src={Box3} alt="" width="550px" height="400px" />
            </Col>
            <Col lg={4} md={12} sm={12}>
              <h4>Downtown</h4>
              <p>Islamabad</p>
              <p>
                ISLAMABAD DOWNTOWN Experience living in Pakistan’s most
                prestigious square kilometer. Spend your days in the new center
                of Islamabad: ISLAMABAD DOWNTOWN, a flagship project of IMARAT
                Group placed centrally in the twin cities on the Islamabad
                Expressway - ten minutes from the Zero Point. Designed on the
                Live, Work, Shop & Play philosophy, the Islamabad Downtown
                offers an outstanding array of residential, retail, leisure,
                business and entertainment facilities for you to indulge your
                every desire. Providi
              </p>
              <h6>Contact for price</h6>
              <Button variant="light" size="lg">
                Call Now
              </Button>
              <Button variant="danger" size="lg">
                Inquire
              </Button>
            </Col>
          </div>

          <Col lg={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Invest;
