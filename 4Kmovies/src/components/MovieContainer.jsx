const MovieContainer = ({ movie }) => {
  return (
    <div className="bg-gray-00 rounded-lg shadow-md overflow-hidden w-48 m-2">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <h3 className="font-bold text-lg">{movie.Title}</h3>
        <p className="text-gray-400">{movie.Year}</p>
        <p className="text-sm text-gray-300">{movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieContainer;
