import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AVATAR } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.gptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleToggleGptSearch = () => {
    dispatch(toggleGptSearch());
  };
  return (
    <div className="absolute z-10 w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black flex flex-row md:flex-row justify-between items-center">
      <img className="w-48 mx-auto md:mx-0" src="logo.png" alt="logo" />
      {user && (
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer text-sm md:text-base"
            onClick={handleToggleGptSearch}
          >
            {gptSearch ? "GPT Search" : "Homepage"}
          </button>
          <div className="flex items-center space-x-2">
            <img src={AVATAR} className="w-10 h-10 rounded-full" alt="avatar" />
            <button
              className="font-extrabold text-white text-sm md:text-base cursor-pointer hover:text-red-500 transition-colors"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
