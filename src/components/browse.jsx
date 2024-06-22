import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <div>
      browse
      <button
        onClick={handleSignOut}
        type="button"
        className="p-2 bg-black text-white"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Browse;
