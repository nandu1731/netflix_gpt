import React from "react";
import Header from "./header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
 

  return <Header />;
};

export default Browse;
