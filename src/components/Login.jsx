import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => setIsSignIn(!isSignIn);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name.current.value })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch(console.error);
        })
        .catch((error) => setErrorMessage(`${error.code} - ${error.message}`));
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => setErrorMessage(`${error.code} - ${error.message}`));
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      {/* Background with blur effect */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10 filter blur-sm brightness-75"
        src={BACKGROUND_IMAGE_URL}
        alt="background"
      />

      {/* Centered form container */}
      <div className="flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md bg-black/80 p-8 rounded-lg text-white shadow-lg 
                     animate-fadeIn"
        >
          {/* Form Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {isSignIn ? "SIGN IN" : "SIGN UP"}
          </h1>

          {/* Full Name Input (Signup only) */}
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 p-3 rounded-lg bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}

          {/* Email Input */}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full mb-4 p-3 rounded-lg bg-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Password Input */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 rounded-lg bg-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Confirm Password (Signup only) */}
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mb-4 p-3 rounded-lg bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-full bg-red-500 hover:bg-red-600 transition-colors 
                       py-3 rounded-lg font-semibold mb-4"
          >
            {isSignIn ? "SIGN IN" : "SIGN UP"}
          </button>

          {/* Toggle SignIn/SignUp */}
          <p className="text-gray-400 text-center">
            {isSignIn ? "New to PopcornAI?" : "Already registered?"}{" "}
            <span
              className="text-white cursor-pointer font-medium hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignIn ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
