import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../images/logo.png'
const Header = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="white" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;