import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const mainMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!mainMovies || mainMovies.length === 0) return null;

  return (
    <div className="relative w-full min-h-[70vh] lg:h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <VideoBackground main={mainMovies[0]} />

      {/* Overlay for Video Title */}
      <div className="absolute inset-0 flex items-end lg:items-center justify-start p-4 lg:p-12 bg-gradient-to-t from-black/80 to-transparent animate-fadeIn">
        <VideoTitle main={mainMovies[0]} />
      </div>
    </div>
  );
};

export default MainContainer;
