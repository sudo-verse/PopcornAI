import { useRef, useState } from "react";
import ai from "../utils/gemini";
import { MOVIES_API } from "../utils/constants";
import Moviescard from "./Moviescard";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [results, setResults] = useState([]);

  const handleGptSearchClick = async () => {
    const query = `
Recommend 5 to 10 movies that are similar to or belong to the genre: "${searchText.current.value}". 
Preferably recent releases, but include classics if relevant. 
Provide only the movie titles in a clean, comma-separated list.
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
  };
  return (
    <div className="pt-28">
      <form
        className=" p-6 bg-black bg-opacity-80 w-full max-w-3xl mx-auto flex items-center gap-2 rounded-xl shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
          type="text"
          ref={searchText}
          placeholder="What type of movies are you looking for?"
        />
        <button
          type="submit"
          onClick={handleGptSearchClick}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Search
        </button>
      </form>
      <div className="flex flex-wrap justify-center mt-8 ">
        {results.map((movie) => (
          <Moviescard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GptSearchBar;
