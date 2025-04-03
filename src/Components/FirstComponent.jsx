import React from 'react'
import {Navbar, Container, Nav, Form, Button} from 'react-bootstrap'
import { ThemeContext } from '../Modules/context'
import { useContext } from 'react'
import { Link } from 'react-router-dom';


function FirstComponent({data, setData}) {


  const [theme, setTheme] = useContext(ThemeContext);

    return (

      <Navbar expand="lg" bg={theme} data-bs-theme={theme}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Link to="/" className='nav-link'>Home</Link> 
             <Nav.Link href="#action2">About</Nav.Link>
             <Nav.Link href="#action2">Browse</Nav.Link>
          </Nav>
          <Button variant="secondary" className='mx-2'onClick={() => {theme === "dark" ? setTheme("light") : setTheme("dark") }}>Theme</Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              onChange={(e) => setData(e.target.value)}
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    )
}

export default FirstComponent



