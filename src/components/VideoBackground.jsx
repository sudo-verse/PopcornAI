import { MOVIES_API } from "../utils/constants";
import { useEffect, useState } from "react";

const VideoBackground = ({ main }) => {
  const [videoKey, setVideoKey] = useState(null);

  if (!main) return null;
  const { id } = main;

  const fetchVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        MOVIES_API
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setVideoKey(data.results[0].key);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, [id]);

  if (!videoKey) return null;

  return (
    <div className="w-full h-[60vh] lg:h-screen relative overflow-hidden">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}`}
        title="Movie Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Optional overlay gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
