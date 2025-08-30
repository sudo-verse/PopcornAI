import { MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      MOVIES_API
    );
    const data = await response.json();
    dispatch(setNowPlayingMovies(data.results));
  };
  useEffect(() => {
    !nowPlayingMovies && fetchMovies();
  }, []);
};
export default useNowPlayingMovies;
