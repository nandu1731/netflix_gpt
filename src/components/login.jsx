import React, { useRef, useState } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../utils/firebase";

const Login = () => {
  const [isSignInFlow, setIsSignInFlow] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const uname = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const validate = ({ name, value }) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setError("Email is incorrect");
        setIsEmailValid(false);
      } else {
        setError("");
        setIsEmailValid(true);
      }
    } else if (name === "password") {
      // console.log(passwordRegex.test(value), value);
      if (!passwordRegex.test(value)) {
        setError("Password is incorrect");
        setIsPasswordValid(false);
      } else {
        setError("");
        setIsPasswordValid(true);
      }
    } else {
      if (name === "username") {
        if (value.length > 8 && value.length < 15) {
          setError("");
          setIsUsernameValid(true);
        } else {
          setError("Username is invalid");
          setIsUsernameValid(false);
        }
      }
    }
  };

  const toggleFlow = () => {
    setIsSignInFlow(!isSignInFlow);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(error.message);
        // ..
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value,
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // if (user?.uid) {
        //   navigate("/browse");
        // }
        // ...
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(error.message);
        // ..
      });
  };

  const handleSubmit = () => {
    if (isSignInFlow && isEmailValid && isPasswordValid) {
      // alert("Logged In succesfully");
      console.log(email.current.value, password.current.value);
      handleSignIn();
    } else if (
      !isSignInFlow &&
      isEmailValid &&
      isPasswordValid &&
      isUsernameValid
    ) {
      console.log(
        email.current.value,
        password.current.value,
        uname.current.value
      );
      handleSignUp();
      // alert("Successfully created account");
    } else {
      console.log(isEmailValid, isPasswordValid, isUsernameValid);
      setError(
        isSignInFlow
          ? "Password or email is incorrect"
          : "Password, email or username is incorrect"
      );
      setIsEmailValid(false);
      setIsPasswordValid(false);
      setIsUsernameValid(false);
      return;
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e?.preventDefault()}
        className="absolute w-3/12 mx-auto bg-black my-36 text-white right-0 left-0 bg-opacity-80"
      >
        <div className="my-8 mx-8">
          <h1 className="text-2xl font-bold">
            {isSignInFlow ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInFlow && (
            <input
              type="name"
              ref={uname}
              name="username"
              onChange={(e) => validate(e?.target)}
              className="border-black p-3 my-5 w-full bg-gray-600"
              placeholder="Enter username"
            />
          )}
          <input
            type="email"
            name="email"
            ref={email}
            onChange={(e) => validate(e?.target)}
            placeholder="Enter email address"
            className="border-black p-3 my-5 w-full bg-gray-600"
          />
          <br />
          <input
            type="password"
            name="password"
            ref={password}
            onChange={(e) => validate(e?.target)}
            placeholder="Enter password"
            className="border-black p-3 my-5 w-full bg-gray-600"
          />
          <br />
          {error && (
            <p className="bg-yellow-300 text-black p-1 rounded-sm">{error}</p>
          )}
          <button
            type="button"
            // disabled={!isValid}
            style={{
              opacity: isSignInFlow
                ? isEmailValid && isPasswordValid
                  ? "1"
                  : "0.5"
                : isEmailValid && isPasswordValid && isUsernameValid
                ? "1"
                : "0.5",
            }}
            onClick={handleSubmit}
            className="px-16 py-3 bg-red-600 text-white rounded-md my-5 w-full cursor-pointer"
          >
            {isSignInFlow ? "Sign In" : "Sign Up"}
          </button>

          <p onClick={toggleFlow} className="cursor-pointer">
            {isSignInFlow
              ? `New to Netflix? Sign up`
              : `Already had an account?  Sign in`}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
