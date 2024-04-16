import React, { useContext, useEffect, useState } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBar from "./SearchBar";

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const { addToList , removeFromWatchlist} = useContext(WatchlistContext);

  const getMovies = async (search) => {
    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(
      search
    )}&apikey=113e7d01`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const responseJson = await response.json();
      setMovies(responseJson.Search);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (search.trim() !== "") {
      getMovies(search);
    }
  }, [search]);

  const handleSearch = () => {
    if (search.trim() !== "") {
      getMovies(search);
    } else {
      alert("Please enter movie name");
    }
  };
  const handleAddToWatchlist = (movie) => {
    addToList(movie);
  };

  return (
    <div className="container overflow-auto">
      <div>
        <MovieListHeading />
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <div className="flex flex-row justify-between">
        <MovieList movies={movies} onAddToList={handleAddToWatchlist}/>
      </div>
    </div>
  );
};

export default MovieDetails;