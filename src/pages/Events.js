import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import EventCard from '../components/EventCard';

const Events = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      name: 'Coldplay Music Concert',
      date: '15-4-2025',
      location: 'Mumbai, India',
      imageUrl: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-29156,resizemode-75,msid-117206471/news/india/coldplay-concert-in-mumbai-bookmyshow-issues-security-guidelines-warns-against-black-marketing.jpg',
      category: 'Music'
    },
    {
      id: 2,
      name: 'Standup Comedy by Samay Raina',
      date: '7-4-2025',
      location: 'Delhi, India',
      imageUrl: 'https://images.moneycontrol.com/static-mcnews/2025/02/20250211084835_samay-raina.jpg?impolicy=website&width=770&height=431',
      category: 'Comedy'
    },
    {
      id: 3,
      name: 'Tech Conference 2025',
      date: '20-4-2025',
      location: 'Bangalore, India',
      imageUrl: 'https://images.sifted.eu/wp-content/uploads/2025/01/07095014/117.-Sifted-Summit-02.10.24-www.harbinson.uk_-scaled.jpg?auto=format&fit=crop&crop=faces%2Cedges%2Centropy&ar=3%3A1&w=3840&q=75',
      category: 'Conference'
    },
    {
      id: 4,
      name: 'Food Festival',
      date: '20-4-2025',
      location: 'Mangalore, India',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/4/410627155/IM/UJ/LV/193091734/food-festival-s-500x500.webp',
      category: 'Food'
    }
  ];

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Live Events</h1>
      
      <div className="mb-4">
        <h3>Categories</h3>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <Button variant="outline-danger">All</Button>
          <Button variant="outline-secondary">Music</Button>
          <Button variant="outline-secondary">Comedy</Button>
          <Button variant="outline-secondary">Conference</Button>
          <Button variant="outline-secondary">Food</Button>
        </div>
      </div>

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {events.map(event => (
          <Col key={event.id}>
            <EventCard 
              name={event.name}
              date={event.date}
              location={event.location}
              imageUrl={event.imageUrl}
              category={event.category}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;