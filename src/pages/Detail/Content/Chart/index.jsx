import React from "react";

import { XYPlot, LineSeries, VerticalGridLines, YAxis, XAxis } from "react-vis";

function index({ selectedCoin }) {
  return (
    <div className="w-full h-[14rem] flex items-center justify-center bg-[#1E1F24] mt-4 pl-4 rounded-xl pt-16 pr-3 pb-12">
      <XYPlot width={400} height={200}>
        <XAxis
          style={{
            stroke: "gray",
            strokeOpacity: "0.1",
            strokeDasharray: "10",
          }}
        />
        <YAxis
          style={{
            stroke: "gray",
            strokeOpacity: "0.1",
            strokeDasharray: "10",
          }}
        />
        <VerticalGridLines
          style={{
            stroke: "gray",
            strokeOpacity: "0.1",
            strokeDasharray: "10",
          }}
        />
        <LineSeries
          data={[
            {
              x: 0,
              y: 0,
            },
            {
              x: 1,
              y: selectedCoin?.reward,
            },
            {
              x: 2,
              y: selectedCoin?.volume,
            },
            {
              x: 3,
              y: selectedCoin?.updated,
            },
            {
              x: 4,
              y: selectedCoin?.difficulty,
            },
          ]}
          opacity={1}
          stroke="#12939a"
          strokeDasharray=""
          strokeStyle="solid"
          strokeWidth=""
          style={{
            stroke: "#5981FE",
            strokeLinejoin: "round",
            strokeWidth: "3px",
          }}
        />
      </XYPlot>
    </div>
  );
}

export default index;
