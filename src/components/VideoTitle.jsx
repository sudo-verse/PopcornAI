const VideoTitle = (props) => {
  if (!props.main) return;
  const { title, overview } = props.main;

  return (
    <div>
      <div className="pt-36 px-12 absolute bg-gradient-to-r from-black w-full aspect-video">
        <h1 className="font-extrabold text-6xl text-white">{title}</h1>
        <p className="py-6 w-1/4 text-white">{overview}</p>
        <div>
          <button className="bg-red-500 text-white m-1 p-4 px-10 border-white rounded-lg cursor-pointer">
            {" "}
            ▶️ Play
          </button>
          <button className="bg-gray-500 text-white m-1 p-4 px-10 border-white rounded-lg cursor-pointer">
            {" "}
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
