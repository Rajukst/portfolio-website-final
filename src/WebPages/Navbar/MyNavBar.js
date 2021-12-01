import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./MyNavBar.css";
const MyNavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">Raju Ahammed</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="mx-4" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="mx-4" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="mx-4" href="#about">
                About Me
              </Nav.Link>
              <Nav.Link className="mx-4" href="#contact">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
