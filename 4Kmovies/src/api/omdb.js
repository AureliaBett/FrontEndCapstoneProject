const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// Search movies by title
export const fetchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === "True") return data.Search;
    return [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Get movie details by IMDb ID
export const fetchMovieById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === "True") return data;
    return null;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
