import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({search, setSearch,handleSearch}) => {
  return (
    <div className="flex justify-center mb-3">
			<input
				className=" w-3/4 px-3 py-2 border border-gray-300 rounded-md mr-2 text-sm focus:outline-none focus:border-blue-500"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				placeholder='Type to search...'
			></input>
            <button
            onClick={handleSearch}
            
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-sm"
          >
             
            Search
          </button>
		</div>

  )
}

export default SearchBar