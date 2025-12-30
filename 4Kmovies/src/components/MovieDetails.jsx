const MovieDetails = ({ movie, onBack }) => {
  if (!movie) return null;

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-8">
      
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="mb-4 text-blue-400 hover:underline text-sm"
        >
          ← Back 
        </button>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
          className="w-full md:w-64 object-cover rounded-lg"
        />

        {/* Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-3">
            {movie.Title} ({movie.Year})
          </h2>

          {/* Genre */}
          <div className="mb-4">
            <span className="text-sm text-gray-400 mr-2">Genre:</span>
            {movie.Genre?.split(", ").map((genre) => (
              <span
                key={genre}
                className="inline-block bg-blue-600 text-xs px-2 py-1 rounded-full mr-2 mb-2"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Director */}
          <p className="text-gray-300 mb-2">
            <strong>Director:</strong> {movie.Director}
          </p>

          {/* Cast */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Cast</h3>
            <p className="text-gray-300">{movie.Actors}</p>
          </div>

          {/* Plot */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Plot</h3>
            <p className="text-gray-300">{movie.Plot}</p>
          </div>

          {/* Ratings */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Ratings</h3>
            <div className="flex flex-wrap gap-3">
              {movie.Ratings && movie.Ratings.length > 0 ? (
                movie.Ratings.map((rating) => (
                  <div
                    key={rating.Source}
                    className="bg-gray-700 px-3 py-2 rounded-lg text-sm"
                  >
                    <p className="font-medium">{rating.Source}</p>
                    <p className="text-blue-400">{rating.Value}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No ratings available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
