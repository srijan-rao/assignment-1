import React from 'react';
import { Container, Button } from 'react-bootstrap';
import HeroCarousel from '../components/HeroCarousel';
import '../styles/Home.css';

const Home = () => {
  // Sample featured movies data
  const featuredMovies = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      genre: 'Action/Sci-Fi',
      rating: 8.4,
      imageUrl: 'https://filmyfool.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg',
      releaseDate: '2023-05-01',
      ticketPrice: 'Rs 300'
    },
    {
      id: 2,
      title: 'The Batman',
      genre: 'Action/Crime',
      rating: 7.9,
      imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851._SX1080_FMjpg_.jpg',
      releaseDate: '2023-03-15',
      ticketPrice: 'Rs 250'
    },
    {
      id: 3,
      title: 'Dune',
      genre: 'Sci-Fi/Adventure',
      rating: 8.0,
      imageUrl: 'https://snworksceo.imgix.net/upb/0136a481-f1da-4ae0-8fe1-74f2a6fa0f0a.sized-1000x1000.png?w=1000',
      releaseDate: '2023-09-30',
      ticketPrice: 'Rs 250'
    },
    {
      id: 4,
      title: 'No Time To Die',
      genre: 'Action/Thriller',
      rating: 7.3,
      imageUrl: 'https://www.007.com/wp-content/uploads/2020/05/B25_11846_RC.jpg',
      releaseDate: '2023-10-08',
      ticketPrice: 'Rs 250'
    },
  ];

  // Sample featured events data
  const featuredEvents = [
    {
      id: 1,
      name: 'Coldplay: Music of the Spheres',
      date: '2023-11-15',
      location: 'Mumbai, India',
      imageUrl: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-29156,resizemode-75,msid-117206471/news/india/coldplay-concert-in-mumbai-bookmyshow-issues-security-guidelines-warns-against-black-marketing.jpg',
      category: 'Music'
    },
    {
      id: 2,
      name: 'Standup Comedy by Samay Raina',
      date: '2023-11-20',
      location: 'Delhi, India',
      imageUrl: 'https://images.moneycontrol.com/static-mcnews/2025/02/20250211084835_samay-raina.jpg?impolicy=website&width=770&height=431',
      category: 'Comedy'
    },
    {
      id: 3,
      name: 'Tech Conference 2025',
      date: '2023-12-05',
      location: 'Bangalore, India',
      imageUrl: 'https://images.sifted.eu/wp-content/uploads/2025/01/07095014/117.-Sifted-Summit-02.10.24-www.harbinson.uk_-scaled.jpg?auto=format&fit=crop&crop=faces%2Cedges%2Centropy&ar=3%3A1&w=3840&q=75',
      category: 'Conference'
    },
    {
      id: 4,
      name: ' Food Festival',
      date: '2023-12-10',
      location: 'Mangalore, India',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/4/410627155/IM/UJ/LV/193091734/food-festival-s-500x500.webp',
      category: 'Food'
    },
  ];

  // Sample offers data
  const specialOffers = [
    {
      id: 1,
      title: 'Flat ₹200 Off',
      description: 'On tickets above ₹500',
      code: 'BOOK200',
      
    },
    {
      id: 2,
      title: 'Weekend Special',
      description: 'Buy 1 Get 1 Free on Saturdays',
      code: 'WEEKEND',
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <Container className="hero-content">
          <h1>Book Your Perfect Entertainment Experience</h1>
          <p>Discover movies, events, and sports near you</p>
          <Button variant="danger" size="lg">Explore Now</Button>
        </Container>
      </div>

      {/* Featured Movies Section */}
      <section className="section-container bg-light">
        <Container>
          <HeroCarousel items={featuredMovies} type="movie" />
        </Container>
      </section>

      {/* Featured Events Section */}
      <section className="section-container">
        <Container>
          <HeroCarousel items={featuredEvents} type="event" />
        </Container>
      </section>

      {/* Special Offers Section */}
      <section className="section-container bg-light">
        <Container>
          <h2 className="section-title">Special Offers</h2>
          <div className="offers-grid">
            {specialOffers.map(offer => (
              <div key={offer.id} className="offer-card">
                <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
                <div className="offer-content">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  <div className="offer-code">Use code: <strong>{offer.code}</strong></div>
                  <Button variant="outline-danger" className="mt-2">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <Container className="text-center py-5">
          <h2>Never Miss an Event Again!</h2>
          <p className="lead">Download our app for exclusive offers and notifications</p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="dark" size="lg">
              <i className="bi bi-apple me-2"></i> App Store
            </Button>
            <Button variant="dark" size="lg">
              <i className="bi bi-google-play me-2"></i> Google Play
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;