import React, { useEffect } from "react";
import Login from "./login";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email } = user;
        dispatch(addUser({uid, email}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // dispatch(removeUser());
      }
    });
  }, []);
  return <Login />;
};

export default Body;
