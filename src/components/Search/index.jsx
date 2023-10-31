import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

function index({ setSearchText }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className="w-full h-full flex items-start justify-between">
        <input
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search from coin list"
          className={`w-[23.5rem] h-14 bg-[#1E1F24] font-semibold rounded-xl px-5 transition-all duration-300 ${
            isFocused && "pl-12 transition-all duration-300"
          } placeholder:text-gray-400 text-gray-400 border-none outline-none mb-10 relative`}
        />
        <HiMenu
          size={30}
          className="text-gray-300 text-3xl ml-5 mt-3 cursor-pointer transition-all duration-300 hover:text-white"
        />
      </div>
      <BiSearch
        className={`text-gray-400  ${
          isFocused
            ? " scale-100 opacity-1000 transition-all duration-500"
            : " scale-0 opacity-0 transition-all duration-500"
        } absolute mt-[16px] ml-4 text-2xl bg-transparent`}
      />
    </>
  );
}

export default index;
