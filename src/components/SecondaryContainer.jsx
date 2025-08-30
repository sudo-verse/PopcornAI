import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="p-4 lg:p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6">Movies</h2>

      <div className="space-y-8">
        {/* Each category becomes a horizontally scrollable carousel on mobile */}
        <MoviesList
          title="Now Playing"
          movies={movies?.nowPlayingMovies || []}
          className="overflow-x-auto"
        />

        <MoviesList
          title="Popular"
          movies={movies?.popularMovies || []}
          className="overflow-x-auto"
        />

        <MoviesList
          title="Top Rated"
          movies={movies?.topRatedMovies || []}
          className="overflow-x-auto"
        />

        <MoviesList
          title="Upcoming"
          movies={movies?.upcomingMovies || []}
          className="overflow-x-auto"
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
