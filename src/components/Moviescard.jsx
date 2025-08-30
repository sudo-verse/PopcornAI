import { MOVIEPOSTER } from "../utils/constants";

const Moviescard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden m-2 w-48 flex-shrink-0 hover:scale-105 transition-transform duration-300">
      <img
        src={MOVIEPOSTER + movie.poster_path}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-3">
        <h1 className="font-semibold text-lg text-white truncate">
          {movie.title}
        </h1>
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>⭐ {movie.vote_average}</span>
          <span>{movie.vote_count} votes</span>
        </div>
      </div>
    </div>
  );
};

export default Moviescard;
