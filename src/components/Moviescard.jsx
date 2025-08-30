import { MOVIEPOSTER } from "../utils/constants";

const Moviescard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-36 sm:w-40 md:w-48 lg:w-52 hover:scale-105 transition-transform duration-300 cursor-pointer">
      {/* Movie Poster */}
      <img
        src={MOVIEPOSTER + movie.poster_path}
        alt={movie.title}
        className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover"
      />

      {/* Movie Info */}
      <div className="p-2 sm:p-3">
        <h2 className="font-semibold text-sm sm:text-base md:text-lg lg:text-lg text-white truncate">
          {movie.title}
        </h2>

        <div className="flex justify-between mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400">
          <span>⭐ {movie.vote_average}</span>
          <span>{movie.vote_count} votes</span>
        </div>
      </div>
    </div>
  );
};

export default Moviescard;
