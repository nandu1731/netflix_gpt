import React, { useEffect, useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderV1 from "./headerV1";
import { updateUser } from "../utils/userSlice";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((store) => store.userStore);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: "Nandini1731",
      photoURL:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
    })
      .then(() => {
        // Profile updated!
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          updateUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  return (
    <div className="flex justify-between p-5 bg-black">
      <HeaderV1 />
      <div className="flex justify-between">
        {!userInfo?.displayName && (
          <button
            onClick={handleUpdate}
            type="button"
            className=" text-white mx-5"
          >
            Update Profile
          </button>
        )}

        <div className="flex justify-between">
          <img
            className="w-6 h-6 rounded-xl"
            src={
              userInfo?.photoURL
                ? userInfo.photoURL
                : "https://upload.wikimedia.org/wikipedia/commons/a/af/Default_avatar_profile.jpg"
            }
          />
          <button
            onClick={handleSignOut}
            type="button"
            className=" text-white mx-1"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
