import React from "react";
import { useSelector } from "react-redux";

const MainVideo = () => {
  const nowPlayingMovies = useSelector((store) => store.movie);

  if (!nowPlayingMovies) return;
  const mainMovie = nowPlayingMovies?.[0] || null;
  console.log(mainMovie);
  return <div>main</div>;
};

export default MainVideo;
