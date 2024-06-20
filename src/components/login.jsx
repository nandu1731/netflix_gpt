import React, { useState } from "react";
import Header from "./header";

const Login = () => {
  const [isSignInFlow, setIsSignInFlow] = useState(true);

  const toggleFlow = () => {
    setIsSignInFlow(!isSignInFlow);
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
              name="username"
              className="border-black p-3 my-5 w-full bg-gray-600"
              placeholder="Enter username"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="border-black p-3 my-5 w-full bg-gray-600"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="border-black p-3 my-5 w-full bg-gray-600"
          />
          <br />
          <button
            type="button"
            className="px-16 py-3 bg-red-600 text-white rounded-md my-5 w-full"
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
