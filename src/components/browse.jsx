import React from "react";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../utils/userSlice";
import Header from "./header";

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

  return <Header />;
};

export default Browse;
