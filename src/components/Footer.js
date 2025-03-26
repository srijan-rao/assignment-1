import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>BookMyShow 2.0</h5>
            <p>Your one-stop destination for movies, events, and sports.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
              <li><a href="#" className="text-white">Terms & Conditions</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Movies</a></li>
              <li><a href="#" className="text-white">Events</a></li>
              <li><a href="#" className="text-white">Sports</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="#" className="text-white"><FaYoutube size={24} /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} BookMyShow 2.0. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;