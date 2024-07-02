import React from "react";
import Header from "./header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainVideo from "./mainVideo";
import VideoInfo from "./videoInfo";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainVideo />
      <VideoInfo />
    </>
  );
};

export default Browse;
