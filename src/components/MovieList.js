import React, { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

const MovieList = ({ movies, onAddToList }) => {
  
  const { list } = useContext(WatchlistContext);

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {movies?.map((movie, index) => {
          const isInList = list.find((o) => o.Title === movie.Title);
         

          return (
            <div key={index} className="flex flex-col items-center bg-white rounded-md shadow-md p-4 m-2 w-64">
              <img src={movie.Poster} alt="movie" className="w-40 h-40 mb-2" />
              <div className="info">
                <div className="header">
                 <h3 className="title text-lg font-semibold box-content">{movie.Title}</h3>
                 <h4 className="release-date">{movie.Year ? movie.Year : "Release Date Not Available"}</h4>
                </div>
                {!isInList ? (
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onAddToList(movie)}
              disabled={isInList}
            >
              Add to Watchlist
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              disabled
            >
              Added to Watchlist
            </button>
          </div>
        )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
