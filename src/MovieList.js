import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.rating}</p>
          <Link to={`/movies/${movie.title}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
