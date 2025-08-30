const VideoTitle = ({ main }) => {
  if (!main) return null;
  const { title, overview } = main;

  return (
    <div className="absolute inset-0 flex flex-col justify-end lg:justify-center p-4 lg:p-12 bg-gradient-to-r from-black/80 to-transparent animate-fadeIn">
      {/* Title */}
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
        {title}
      </h1>

      {/* Overview / description */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 lg:mb-8 max-w-full lg:max-w-xl line-clamp-5">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 md:px-10 rounded-lg font-semibold transition">
          ▶️ Play
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 md:px-10 rounded-lg font-semibold transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
