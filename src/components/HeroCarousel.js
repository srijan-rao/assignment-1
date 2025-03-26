import React from 'react';
import { Carousel } from 'react-bootstrap';
import MovieCard from './MovieCard';
import EventCard from './EventCard';
import './HeroCarousel.css'; // Optional for custom styles

const HeroCarousel = ({ items, type = 'movie' }) => {
  // Function to chunk items into groups of 4 for each carousel slide
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const groupedItems = chunkArray(items, 1);

  return (
    <div className="hero-carousel-container">
      <h2 className="carousel-title">
        {type === 'movie' ? 'Featured Movies' : 'Upcoming Events'}
      </h2>
      
      <Carousel 
        indicators={true} 
        interval={5000} 
        pause={false}
        variant="dark"
        className="custom-carousel"
      >
        {groupedItems.map((itemGroup, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center flex-wrap carousel-item-container">
              {itemGroup.map((item, i) => (
                <div key={i} className="mx-3 my-2 carousel-card-wrapper">
                  {type === 'movie' ? (
                    <MovieCard {...item} />
                  ) : (
                    <EventCard {...item} />
                  )}
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;