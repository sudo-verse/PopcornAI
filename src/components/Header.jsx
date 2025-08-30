import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AVATAR, LOGO } from "../utils/constants";
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
    <div className="absolute z-10 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-48 " src="public/logo.png" alt="logo" />
      {user && (
        <div className="flex">
          <button
            className="px-4 py-2 m-2 p-2 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer"
            onClick={handleToggleGptSearch}
          >
            {gptSearch ? "GPT Search" : "Homepage"}
          </button>
          <img src={AVATAR} className="w-16" alt="avatar" />
          <button
            className="font-extrabold text-red-500 m-2 cursor-pointer "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
