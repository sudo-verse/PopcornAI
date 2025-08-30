import { MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      MOVIES_API
    );
    const data = await response.json();
    dispatch(setPopularMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default usePopularMovies;
