import React, { createContext, useEffect, useState } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("watchlist");
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(list));
  }, [list]);

  const addToList = (movie, userEmail) => {
    const updatedMovie = { ...movie, addedToWatchlist: true ,userEmail: userEmail };

    setList([...list, updatedMovie]);
  };

  const removeFromWatchlist = (movieTitle, movieYear) => {
    setList(
      list.filter(
        (movie) => movie.Title !== movieTitle || movie.Year !== movieYear
      )
    );
  };

  return (
    <WatchlistContext.Provider value={{ list, addToList, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
