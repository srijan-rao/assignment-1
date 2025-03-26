import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Sports = () => {
  // Sample sports events data
  const sportsEvents = [
    {
      id: 1,
      name: 'IPL Cricket Match',
      teams: 'KKR vs RCB',
      date: '2025-4-18',
      venue: 'Chinaswamy Stadium, Bangalore',
      imageUrl: 'https://exchange4media.gumlet.io/news-photo/139188-IPL.jpg ',
    },
    {
      id: 2,
      name: 'ISL Football Match',
      teams: 'MCFC vs BFC',
      date: '2025-5-22',
      venue: 'Kanteerava Stadium, Bangalore',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7kPrdWp7FecYqW8QCgnj-reigIqvEno3BA&sttps://via.placeholder.com/300x200?text=MCFC+vs+BFC',
      ticketPrice: '₹499 onwards'
    },
  ];

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Sports Events</h1>
      
      <div className="mb-4">
        <h3>Filter By Sport</h3>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <Button variant="outline-danger">All</Button>
          <Button variant="outline-secondary">Cricket</Button>
          <Button variant="outline-secondary">Football</Button>
          <Button variant="outline-secondary">Kabaddi</Button>
          <Button variant="outline-secondary">Badminton</Button>
        </div>
      </div>

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {sportsEvents.map(event => (
          <Col key={event.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={event.imageUrl} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.teams}</Card.Subtitle>
                <Card.Text>
                  <Badge bg="info">{event.date}</Badge>
                  <br />
                  <small>{event.venue}</small>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <span className="text-danger fw-bold">{event.ticketPrice}</span>
                <Button variant="danger" size="sm">Book Now</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sports;