import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';
import { FaSearch, FaUser, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="text-danger fw-bold">BookMyShow</span> 2.0
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <FaBars />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
            <Nav.Link href="#">Offers</Nav.Link>
          </Nav>
          
          <Form className="d-flex mx-3">
            <FormControl
              type="search"
              placeholder="Search for movies, events..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">
              <FaSearch />
            </Button>
          </Form>
          
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              <FaUser /> Sign In
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Login</Dropdown.Item>
              <Dropdown.Item href="#">Register</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;