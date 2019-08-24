import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = props => {
  // use context hook
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav className="nav">
      <ul>
        <li>Movies</li>
        <li>Number of Movies: {movies.length}</li>
      </ul>
    </nav>
  );
};

export default Nav;
