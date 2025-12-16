import { useState } from "react";
import SearchField from "./SearchField";
import { fetchMovies, fetchMovieById } from "../api/omdb";
import MovieContainer from "./MovieContainer"; 
import MovieDetails from "./MovieDetails";


const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setLoading(true);
    setError("");
    setSelectedMovie(null);
    const results = await fetchMovies(query);
    setLoading(false);
    if (results.length === 0) {
      setError("No movies found");
    }
    setMovies(results);
  };

  const handleMovieClick = async (id) => {
    setLoading(true);
    const movie = await fetchMovieById(id);
    setLoading(false);
    setSelectedMovie(movie);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Welcome to 4Kmovies 🎬
      </h2>

      <SearchField onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <div className="mt-8 flex flex-wrap justify-center">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => handleMovieClick(movie.imdbID)}
              className="cursor-pointer"
            >
              <MovieContainer movie={movie} /> {/* updated usage */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
