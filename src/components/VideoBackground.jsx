import { MOVIES_API } from "../utils/constants";
import { useEffect, useState } from "react";

const VideoBackground = (props) => {
  const [videoKey, setVideoKey] = useState(null);

  if (!props.main) return;
  const { id } = props.main;
  const fetchVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      MOVIES_API
    );
    const data = await response.json();
    const { key: videoKey } = data.results[0];
    setVideoKey(videoKey);
  };
  useEffect(() => {
    fetchVideo();
  }, [id]);
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoKey}?&autoplay=1&mute=1&loop=1`}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
