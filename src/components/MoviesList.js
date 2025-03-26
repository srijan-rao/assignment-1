import React, { useState } from 'react';
import { Table, Form, Button, ButtonGroup, Dropdown } from 'react-bootstrap';

const MoviesList = ({ movies }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('releaseDate');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies
    .filter(movie => 
      filter === 'all' || movie.genre.toLowerCase() === filter.toLowerCase()
    )
    .filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'rating') return b.rating - a.rating;
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    });

  const genres = [...new Set(movies.map(movie => movie.genre))];

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between mb-4 flex-wrap">
        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Control
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        
        <ButtonGroup>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">
              Filter: {filter === 'all' ? 'All Genres' : filter}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setFilter('all')}>All Genres</Dropdown.Item>
              {genres.map(genre => (
                <Dropdown.Item key={genre} onClick={() => setFilter(genre)}>
                  {genre}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">
              Sort By: {sortBy}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortBy('releaseDate')}>Release Date</Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy('title')}>Title</Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy('rating')}>Rating</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Movie Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie, index) => (
            <tr key={index}>
              <td>
                <img 
                  src={movie.imageUrl} 
                  alt={movie.title} 
                  style={{ width: '50px', height: '75px', objectFit: 'cover' }} 
                />
              </td>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{new Date(movie.releaseDate).toLocaleDateString()}</td>
              <td>{movie.rating}/10</td>
              <td>{movie.price}</td>
              <td>
                <Button variant="danger" size="sm" className="me-2">Book</Button>
                <Button variant="outline-secondary" size="sm">Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MoviesList;