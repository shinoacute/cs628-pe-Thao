// Import the useState hook from React to manage component state
import { useState } from "react";
// Import the CSS file for styling the component
import "./MovieList.css";

// Static array of movie objects — each has an id, title, genre, and release year
const movies = [
  { id: 1, title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
  { id: 2, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
  { id: 3, title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
];

// MovieCard is a functional sub-component that renders a single movie item
// It receives a movie object as a prop via destructuring
const MovieCard = ({ movie }) => {
  // handleClick fires when the card is clicked, alerting the movie title
  const handleClick = () => {
    alert(`You clicked on "${movie.title}"`);
  };

  return (
    // Attach the click handler to the card div
    <div className="movie-card" onClick={handleClick}>
      {/* Display the movie title as a heading */}
      <h2 className="movie-title">{movie.title}</h2>
      {/* Display the genre below the title */}
      <p className="movie-genre">{movie.genre}</p>
      {/* Display the release year, prefixed with "Released:" */}
      <p className="movie-year">Released: {movie.releaseYear}</p>
    </div>
  );
};

// MovieList is the main parent component that manages state and renders the full list
const MovieList = () => {
  // State to track the currently selected genre; defaults to "All Genres"
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Derive a unique list of genres from the movies array using Set to remove duplicates
  // Prepend "All Genres" as the default option for the dropdown
  const uniqueGenres = ["All Genres", ...new Set(movies.map((m) => m.genre))];

  // Filter the movies array based on the selected genre
  // If "All Genres" is selected, show all movies; otherwise show only matches
  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((m) => m.genre === selectedGenre);

  return (
    <div className="container">
      {/* Page heading */}
      <h1 className="heading">Movie List</h1>

      {/* Dropdown to select a genre; updates selectedGenre state on change */}
      <select
        className="genre-select"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {/* Render one <option> per unique genre; key prevents React reconciliation warnings */}
        {uniqueGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Render the filtered movies list; each card uses the movie id as its unique key */}
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

// Export MovieList as the default export so it can be imported in App.jsx
export default MovieList;
