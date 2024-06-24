import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  NETFLIX_LOGO,
  NETFLIX_LOGO_SMALL,
  PROFILE_IMG,
} from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        // User is signed out
        navigate("/");
        // dispatch(removeUser());
      }
    });
    return () => unsubscribe();
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

  const userInfo = useSelector((store) => store.userStore);
  return !userInfo?.uid ? (
    <div className="px-8 py-8 absolute z-10">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
    </div>
  ) : (
    <div className="flex justify-between p-5">
      <div className="w-10 h-9">
        <img src={NETFLIX_LOGO_SMALL} alt="netflix_logo" />
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between">
          <img
            className="w-10 h-10 rounded-xl"
            alt="profile"
            src={userInfo?.photoURL ? userInfo.photoURL : { PROFILE_IMG }}
          />
          <button
            onClick={handleSignOut}
            type="button"
            className=" text-black mx-1"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
