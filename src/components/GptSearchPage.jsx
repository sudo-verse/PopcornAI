import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";

const ShowGptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="h-screen w-screen object-cover  blur-sm"
          src={BACKGROUND_IMAGE_URL}
          alt="background"
        />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default ShowGptSearch;
