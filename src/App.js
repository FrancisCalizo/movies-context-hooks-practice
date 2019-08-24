import React from 'react';
import './App.css';
import Nav from './Nav';
import Movies from './Movies';
import Input from './Input';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <Input />
        <Movies />
      </MovieProvider>
    </div>
  );
}

export default App;
