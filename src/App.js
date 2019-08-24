import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Movies from './Movies';

function App() {
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
      <Nav movies={movies} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
