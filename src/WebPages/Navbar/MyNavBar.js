import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#features">Skills</Nav.Link>
              <Nav.Link href="#features">Projects</Nav.Link>
              <Nav.Link href="#features">About Me</Nav.Link>
              <Nav.Link href="#features">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
