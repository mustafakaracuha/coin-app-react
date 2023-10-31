import React from "react";
import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";

function index() {
  return (
    <>
      <div className="sticky top-0 w-full flex items-start justify-between">
        <Link
          to={"/"}
          className="w-[23.5rem] h-14 flex items-center justify-between"
        >
          <FaArrowLeftLong className="text-gray-300 text-3xl transition-all duration-300 hover:text-white cursor-pointer" />
        </Link>
        <HiMenu
          size={29}
          className="text-gray-300 text-3xl mr-1 mt-[12.5px] cursor-pointer transition-all duration-300 hover:text-white"
        />
      </div>
    </>
  );
}

export default index;
