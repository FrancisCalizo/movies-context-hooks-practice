import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Movies = () => {
  // use context hook
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id} className="movie">
          <h2>{movie.name}</h2>
          <p>{movie.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
