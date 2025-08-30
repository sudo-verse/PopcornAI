import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  console.log(movies);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Movies</h2>

      <div className="space-y-8">
        <MoviesList
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies || []}
        />

        <MoviesList title={"Popular"} movies={movies?.popularMovies || []} />

        <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies || []} />
        <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies || []} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
