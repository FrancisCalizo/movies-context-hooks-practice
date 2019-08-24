import React, { useState } from 'react';

const Movies = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useState([
    {
      name: 'Iron Man',
      date: 'May 2011',
      id: '1'
    },
    {
      name: 'Thor',
      date: 'October 2014',
      id: '2'
    },
    {
      name: 'Captain America',
      date: 'March 2018',
      id: '3'
    }
  ]);

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
