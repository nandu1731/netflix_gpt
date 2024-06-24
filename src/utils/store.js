import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import  movieReducer  from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    userStore: userReducer,
    movie: movieReducer,
  },
});
export default appStore;
