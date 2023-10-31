import React from "react";

import { XYPlot, LineSeries } from "react-vis";

function index({ selectedCoin }) {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  return (
    <div className="w-full h-58 bg-[#1E1F24] mt-4 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 font-bold text-md ml-8">Last 24 hours</p>
          <h1 className=" ml-8 mt-3 text-white text-3xl font-bold">
            ${selectedCoin?.price?.toString().slice(0, 8)}
          </h1>
          <p
            className={
              selectedCoin?.reward <= "0" || selectedCoin?.reward <= "-1"
                ? "ml-8 mt-2 text-red-400 font-semibold text-md"
                : "ml-8 mt-2 text-green-400 font-semibold text-md"
            }
          >
            +{selectedCoin?.reward?.toString().slice(0, 8)}%
          </p>
        </div>
        <div className="pr-10 pt-10">
          <XYPlot
            height={130}
            width={130}
            stroke={
              selectedCoin?.reward <= "0" || selectedCoin?.reward <= "-1"
                ? "#F77171"
                : "#49de80"
            }
          >
            <LineSeries data={data} />
          </XYPlot>
        </div>
      </div>

      <div className="mb-5 flex items-center justify-center gap-4">
        <button className="w-[11rem] h-12 text-white bg-[#587DF8] rounded-full font-bold">
          Deposit
        </button>
        <button className="w-[11rem] h-12 border-2 text-[#587DF8] border-[#587DF8] font-bold rounded-full">
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default index;
