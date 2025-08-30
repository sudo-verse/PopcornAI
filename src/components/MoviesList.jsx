import React from "react";
import Moviescard from "./Moviescard";

const MoviesList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="my-6 lg:my-8">
      {/* Category Title */}
      <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-red-500 mb-4 px-2 lg:px-0">
        {title}
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 px-2 lg:px-0">
        {movies.map((movie) => (
          <Moviescard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
