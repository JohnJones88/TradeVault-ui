import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container className="bg-dark">
              <Navbar.Brand href="/home">TradeVault</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Login</Nav.Link>
                  <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </div>
  )
}