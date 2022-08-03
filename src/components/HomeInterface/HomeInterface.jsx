import React from "react";
import description_img from '../images/description_img.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_supersenses from '../images/logo_supersenses.png';
import NosValeur from "../NosValeur";
import {LinkContainer} from "react-router-bootstrap";


function HomeInterface() {

  return (
    <div className="bg-img" id="bg_img_header">

      <Navbar bg="transparent" expand="lg" >
        <Container>
          <Navbar.Brand href="#home"><img src={logo_supersenses} alt="logo_supersenses" className="logo_supersenses" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto" >
            <LinkContainer to="/HomeInterface"><Nav.Link className='Nav_item' id='NavText_other'>Acceuil</Nav.Link></LinkContainer>
              <LinkContainer to="/NosSolution"><Nav.Link  className='Nav_item' id='NavText_other'>Nos solutions</Nav.Link></LinkContainer>
              <LinkContainer to="/NosExpertises"><Nav.Link className='Nav_item' id='NavText_other'>Notre expertise</Nav.Link></LinkContainer>
             <LinkContainer to="/Apropos"><Nav.Link  className='Nav_item' id='NavText_other'>A propos</Nav.Link></LinkContainer> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="Description_supersenses container">
        <Row>
          <Col>
            <h2>Bienvenue à</h2>
            <h1>Super Senses</h1>
            <p>Super Senses est une startup Tunisienne dévoilée par une <br />équipe d’ingénieurs
              multidisciplinaires. Notre vision est de <br />crée un outil technologique d’aide à la
              décision capable<br /> d’ajouter un 6ieme sens utilisant l’intelligence artificielle.</p>
            <Button variant="outline-dark">Lire tout</Button>
          </Col>
          <Col>
            <div id="description_img">
              <img src={description_img} alt="description_img" className="description_img" />
            </div>
          </Col>
        </Row>
        <NosValeur />
      </div>

    </div>
  );
}

export default HomeInterface