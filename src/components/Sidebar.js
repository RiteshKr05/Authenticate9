
import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList, faSearch, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
 
    <div className="flex flex-col bg-gray text-black h-screen w-80">
    <div className="bg-white text-black h-screen w-64 p-6 border-grey border-2 flex flex-col justify-between fixed">
      <div>
        <div className="text-4xl  font-bold text-red-500 mb-8">Watchlists</div>
        <nav>
          <ul className="space-y-4 ">
            <li>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="mr-2 text-gray-500"
                />{" "}
                {/* Search icon */}
                <input
                  type="text"
                  className="border rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                  placeholder="Search"
                />{" "}
                {/* Search box */}
              </div>
            </li>
            <li>
              <Link
                to="/home"
                className="hover:text-red-500 transition-colors duration-300 flex items-center"
              >
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/my-lists'
                className="hover:text-red-500 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faList} className="mr-2" />
                My Lists
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    <div className=' flex justify-between'>
      <div className="hover:text-red-500 transition-colors duration-300 flex items-center "><FontAwesomeIcon icon={faUser} className="m-2" />GUEST</div>
      <Link
          to="/login"
          className="hover:text-red-500 transition-colors duration-300 flex items-center"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </Link>
      </div>
    </div>
    </div>
  
  )
}

export default Sidebar