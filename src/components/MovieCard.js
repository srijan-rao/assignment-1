import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ title, genre, rating, imageUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {genre} | Rating: {rating}/10
        </Card.Text>
        <Button variant="danger" className="me-2">Book Now</Button>
        <Button variant="outline-secondary">Trailer</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;