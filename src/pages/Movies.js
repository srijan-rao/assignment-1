import React from 'react';
import MoviesList from '../components/MoviesList';


const Movies = () => {
  const movies = [
    {
      title: 'Interstellar',
      genre: 'Sci-fic',
      rating: 9.5,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX',
      releaseDate: '2023-05-01',
      price: 'Rs 300'
    },
    {
      title: 'Captain America: Brave New World',
      genre: 'Action',
      rating: 8.7,
      imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/67b3505563c5bbb1f1539193/brave/960x0.png?format=png&width=960',
      releaseDate: '2023-03-15',
      price: 'Rs 200'
    },
    
  ];

  return (
    <div>
      <h1 className="text-center my-4">Movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;