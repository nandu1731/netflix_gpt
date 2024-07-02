import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO_SMALL, PROFILE_IMG } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        // User is signed out
        navigate("/");
        // (removeUser());
      }
    });
    // return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const userInfo = useSelector((store) => store.user);
  // console.log(userInfo.uid);
  return (
    <div className="flex justify-between p-5 bg-black">
      <div className="w-10 h-9">
        <img src={NETFLIX_LOGO_SMALL} alt="netflix_logo" />
      </div>
      <div className="flex justify-between">
        {userInfo?.uid && (
          <div className="flex justify-between">
            <img
              className="w-10 h-10 rounded-xl"
              alt="profile"
              src={userInfo?.photoURL ? userInfo.photoURL : { PROFILE_IMG }}
            />
            <button
              onClick={handleSignOut}
              type="button"
              className=" text-white mx-1"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
