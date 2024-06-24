import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateProfile(user, {
          displayName: "Nandu",
          photoURL:
            "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-soldiervip-1391498.jpg&fm=jpg",
        })
          .then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/browse");
          })
          .catch((error) => {
            // An error occurred
            console.log(error.message);
          });
      } else {
        // User is signed out
        // dispatch(removeUser());
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const userInfo = useSelector((store) => store.userStore);
  return userInfo?.uid ? (
    <div className="px-8 py-8 absolute z-10">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
    </div>
  ) : (
    <div className="flex justify-between p-5 bg-black">
      <div className="w-8 h-7">
        <img
          src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
          alt="netflix_logo"
        />
      </div>
      <div className="flex justify-between">
        {/* {!userInfo?.displayName && (
          <button
            onClick={handleUpdate}
            type="button"
            className=" text-white mx-5"
          >
            Update Profile
          </button>
        )} */}

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

export default Header;
