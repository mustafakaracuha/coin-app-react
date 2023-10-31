import React from "react";
import Skeleton from "@mui/material/Skeleton";

function index({ count }) {
  const skeletons = Array(count).fill(null);

  return (
    <>
      <Skeleton
        className="!w-full !h-12 !bg-[#1E1F24] !mt-4 !rounded-xl"
        variant="text"
      />
      {skeletons.map((_, index) => (
        <div key={index}>
          <Skeleton
            className="!w-full !h-[4.6rem] !mt-2 !bg-[#1E1F24] !rounded-xl"
            variant="rectangular"
          />
        </div>
      ))}
    </>
  );
}

export default index;
