import React, { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import Sidebar from "./Sidebar";

const MyList = () => {
  const { list, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className=" ml-40">
        <div className=' text-5xl py-3'>Your <span className=' text-red-500'>Watchlists</span></div>
        <div className=" flex flex-wrap">
        {list.length === 0 ? (
           <div className="border-2 border-red-400 rounded-lg p-6 m-8">
           
           <p className=' pt-6'>No Movies In Your Watchlist Add Some! </p>
           
         </div>
        ) : (
          list.map((movie, index) => (
            <div key={index} className="flex flex-col items-center bg-white rounded-md shadow-md p-4 m-2 w-64">
              <img src={movie.Poster} alt="movie" className="w-40 h-40 mb-2" />
              <div className="info">
                <div className="header">
                  <h3 className="title text-lg font-semibold box-content">{movie.Title}</h3>
                  <h4 className="release-date">{movie.Year ? movie.Year : "Release Date Not Available"}</h4>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => removeFromWatchlist(movie.Title, movie.Year)}
                  >
                    Remove from Watchlist
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default MyList;
