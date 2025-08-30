import React from "react";
import Moviescard from "./Moviescard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="my-8">
      <h1 className="font-bold text-2xl text-red-500 mb-4">{title}</h1>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
        {movies.map((movie) => (
          <Moviescard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
