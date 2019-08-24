import React from 'react';
import './App.css';
import Nav from './Nav';
import Movies from './Movies';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <Movies />
      </MovieProvider>
    </div>
  );
}

export default App;
