import React, { useState, createContext } from 'react';

// define context
export const MovieContext = createContext();

// define provider
export const MovieProvider = props => {
  // define movie state
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
