import React, { useState } from "react";
import "./MovieList.css";

const movies = [
  { id: 1, title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
  { id: 2, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
  { id: 3, title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
];

const MovieCard = ({ movie }) => {
  const handleClick = () => {
    alert(`You clicked on "${movie.title}"`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-genre">{movie.genre}</p>
      <p className="movie-year">Released: {movie.releaseYear}</p>
    </div>
  );
};

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const uniqueGenres = ["All Genres", ...new Set(movies.map((m) => m.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((m) => m.genre === selectedGenre);

  return (
    <div className="container">
      <h1 className="heading">Movie List</h1>

      <select
        className="genre-select"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {uniqueGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;