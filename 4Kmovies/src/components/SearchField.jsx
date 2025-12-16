import { useState } from "react";

const SearchField = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-8 mb-6"
    >
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 p-2 rounded-l-md border text-black border-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchField;