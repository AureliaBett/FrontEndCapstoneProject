const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto my-8">
      <div className="flex flex-col md:flex-row">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
          className="w-full md:w-64 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
          <p className="text-gray-300 mb-2"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="text-gray-300 mb-2"><strong>Director:</strong> {movie.Director}</p>
          <p className="text-gray-300 mb-2"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="text-gray-300 mb-2"><strong>Plot:</strong> {movie.Plot}</p>
          <p className="text-gray-300 mb-2"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;