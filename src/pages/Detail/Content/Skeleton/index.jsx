import React from "react";
import Skeleton from "@mui/material/Skeleton";

function index() {
  return (
    <>
      <Skeleton
        className="!w-full !h-16 !mt-2 !bg-[#1E1F24] !rounded-xl"
        variant="text"
      />
      <Skeleton
        className="!w-full !h-8 !mb-4 !bg-[#1E1F24] !rounded-lg"
        variant="text"
      />
      <Skeleton
        className="!w-full !h-52 !mb-4 !bg-[#1E1F24] !rounded-xl"
        variant="rectangular"
      />
      <Skeleton
        className="!w-full !h-[13rem] !mb-4 !bg-[#1E1F24] !rounded-xl"
        variant="rectangular"
      />
      <Skeleton
        className="!w-full !h-[9rem] mb-5 !bg-[#1E1F24] !rounded-xl"
        variant="rectangular"
      />
    </>
  );
}

export default index;
