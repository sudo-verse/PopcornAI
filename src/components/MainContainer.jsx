import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
  const mainMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!mainMovies) return;

  return (
    <div className="w-screen h-screen bg-black">
      <VideoTitle main={mainMovies[0]} />
      <VideoBackground main={mainMovies[0]} />
    </div>
  );
};

export default MainContainer;
