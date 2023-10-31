import React, { useState } from 'react'
import Search from "./components/Search";
import CoinList from "./components/CoinList";
import { NavLink } from "react-router-dom";


function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="max-w-md w-full bg-black min-h-screen mx-auto flex flex-col items-start pt-12 px-4">
      <Search setSearchText={setSearchText}/>
      <div className="flex items-center justify-center">
        <NavLink
          to="/"
          className={({ isActive}) =>
            isActive ? "text-white font-extrabold text-2xl transition-all duration-300" : "text-gray-500 font-bold text-2xl transition-all duration-300"
          }
        >
          Trends
        </NavLink>
        <NavLink to="/all" className={({ isActive}) =>
            isActive ? "text-white font-extrabold text-2xl ml-5 transition-all duration-300" : "text-gray-500 font-bold text-2xl ml-5 transition-all duration-300"
          }
        >
          All
        </NavLink>
      </div>
      <CoinList searchText={searchText}/>
    </div>
  );
}

export default App;
