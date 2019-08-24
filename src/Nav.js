import React from 'react';

const Nav = props => {
  return (
    <nav className="nav">
      <div>
        <h1>Movie List</h1>
      </div>
      <div>
        <h1>Number of Movies: {props.movies.length}</h1>
      </div>
    </nav>
  );
};

export default Nav;
