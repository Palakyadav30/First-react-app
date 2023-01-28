import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//Here is your key: 9e799e88

const API_URL = "http://www.omdbapi.com?apikey=9e799e88";

const movie1 = {
  Title: "Harry Potter and the Deathly Hallows: Part 2",
  Year: "2011",
  imdbID: "tt1201607",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Harry potter");
  }, []);

  return (
    <div className="App">
      <h1>Movie-hi-Movie</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies "
          value={searchTerm}
          onChange={(e) =>setSearchTerm(e.target.value) }
        />

        <img src={SearchIcon} alt="search icon" onClick={() =>searchMovies(searchTerm) } />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
