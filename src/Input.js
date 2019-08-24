import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';

const Input = () => {
  // use context hook
  const [movies, setMovies] = useContext(MovieContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const updateTitle = e => setTitle(e.target.value);

  const updateDate = e => setDate(e.target.value);

  const addMovie = e => {
    e.preventDefault();

    setMovies(previous => [...previous, { name: title, date: date }]);
    setTitle('');
    setDate('');
  };
  return (
    <div>
      <form onSubmit={addMovie}>
        <div>
          <input
            type="text"
            placeholder="Movie Title..."
            value={title}
            onChange={updateTitle}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Date Release..."
            value={date}
            onChange={updateDate}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
