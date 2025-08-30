import { useRef, useState } from "react";
import ai from "../utils/gemini";
import { MOVIES_API } from "../utils/constants";
import Moviescard from "./Moviescard";
import Loader from "./Loader";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // new loading state

  const handleGptSearchClick = async () => {
    setLoading(true); // start loader
    setResults([]);
    try {
      const query = `
I like the movie/show "${searchText.current.value}". 
List 5 to 10 movies or shows that are similar in theme, genre, tone, or style. 
Include recent releases as well as well-known classics if relevant. 
Provide only the movie/show titles as a clean, comma-separated list, without any extra explanation or numbering.
`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: query,
      });
      const rawText = response.text;
      const movies = rawText.split(",").map((m) => m.trim());

      const requests = movies.map((movie) =>
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            movie
          )}&include_adult=false&language=en-US&page=1`,
          MOVIES_API
        )
          .then((res) => res.json())
          .then((data) => (data.results?.length > 0 ? data.results[0] : null))
      );

      const results = await Promise.all(requests);
      setResults(results.filter(Boolean));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-12">
      {/* Search Form */}
      <form
        className="flex flex-col sm:flex-row items-center gap-2 p-4 sm:p-6 bg-black bg-opacity-80 max-w-3xl mx-auto rounded-xl shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder="What type of movies are you looking for?"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          onClick={handleGptSearchClick}
          className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition mt-2 sm:mt-0"
        >
          Search
        </button>
      </form>

      {/* Loading or Results */}
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {results.map((movie) => (
            <Moviescard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
