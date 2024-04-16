import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MovieListHeading = () => {
  return (
    <div className="border-2 border-red-400 rounded-lg p-6 m-8">
    <div className=' text-5xl py-3'>Welcome to <span className=' text-red-500'>Watchlists</span></div>
    <p className=' pt-6'>Browse movies, add them to watchlists and share them with friends<br/>Just click the to add a movie, the poster to see more details </p>
    
  </div>
  )
}

export default MovieListHeading