import { MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      MOVIES_API
    );
    const data = await response.json();
    dispatch(setUpcomingMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default useUpcomingMovies;
