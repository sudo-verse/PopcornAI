import { MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      MOVIES_API
    );
    const data = await response.json();

    dispatch(setTopRatedMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default useTopRatedMovies;
