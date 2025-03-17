import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

function FirstComponent() {
    return (

        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
    )
}

export default FirstComponent



