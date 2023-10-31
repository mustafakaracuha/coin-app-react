import React from "react";

function index({ selectedCoin }) {
  return (
    <>
      <div className="w-full h-[9rem] flex flex-col items-start justify-between px-5 pt-4 pb-4 bg-[#1E1F24] mt-4 rounded-xl overflow-hidden">
        <div className="w-full flex items-center justify-between mb-2">
          <p className="text-gray-400 font-bold">Total Price</p>
          <p className="text-gray-400 font-semibold">
            ${selectedCoin?.price?.toString().slice(0, 10)}
          </p>
        </div>

        <div className="w-full flex items-center justify-between mb-2">
          <p className="text-gray-400 font-bold">Reward</p>
          <p className="text-gray-400 font-semibold">
            {selectedCoin?.reward?.toString().slice(0, 6)}
          </p>
        </div>

        <div className="w-full flex items-center justify-between mb-2">
          <p className="text-gray-400 font-bold">Reward Block</p>
          <p className="text-gray-400 font-semibold">
            {selectedCoin?.reward_block}%
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 font-bold">Volume</p>
          <p className="text-gray-400 font-semibold">
            {selectedCoin?.volume?.toString().slice(0, 10)}%
          </p>
        </div>
      </div>
    </>
  );
}

export default index;
