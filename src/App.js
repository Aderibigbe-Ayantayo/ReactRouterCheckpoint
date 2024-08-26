import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDescription from './MovieDescription';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Avatar', description: 'A mind-bending thriller', image: "https://ln.run/seMrZ", rating: 5, trailer: 'https://www.youtube.com/embed/5PSNL1qE6VY' },
    { title: 'Black Panther', description: 'A sci-fi classic', image: "https://ln.run/6jq2b", rating: 4, trailer: 'https://www.youtube.com/embed/xjDjIWPwcPU' },
    // Add more movies if needed
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Router>
      <div className="App">
        <h1>My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  filterTitle={filterTitle}
                  filterRating={filterRating}
                  setFilterTitle={setFilterTitle}
                  setFilterRating={setFilterRating}
                />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movies/:title"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
