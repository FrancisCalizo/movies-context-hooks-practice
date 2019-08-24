import React from 'react';

const Movies = props => {
  return (
    <div>
      {props.movies.map(movie => (
        <div key={movie.id} className="movie">
          <h2>{movie.name}</h2>
          <p>{movie.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
