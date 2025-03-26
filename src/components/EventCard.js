import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const EventCard = ({ name, date, location, imageUrl, category }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <Badge bg="secondary">{category}</Badge>
          <br />
          <small className="text-muted">{new Date(date).toLocaleDateString()}</small>
          <br />
          <small>{location}</small>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="danger" className="w-100">Book Tickets</Button>
      </Card.Footer>
    </Card>
  );
};

export default EventCard;