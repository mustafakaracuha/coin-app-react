import React, { useState, useEffect } from "react";

import Navigation from "../Navigation";
import { useParams } from "react-router-dom";
import Price from "./Price";
import Chart from "./Chart";
import Details from "./Details";
import Skeleton from "./Skeleton";

import { getSelectedCoin } from "../../../services/api";

function index() {
  const [selectedCoin, setSelectedCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { name } = useParams();

  useEffect(() => {
    if (name) {
      loadSelectedCoin();
    }
  }, [name]);

  const loadSelectedCoin = async () => {
    try {
      setIsLoading(true);
      const response = await getSelectedCoin(name);
      if (response && response.status === 200) {
        setSelectedCoin(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    } catch (apiError) {
      console.log(apiError);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full h-screen bg-black mx-auto flex flex-col items-start pt-12 px-3">
      <Navigation />
      <div className="w-full h-screen flex flex-col items-start justify-start">
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            {selectedCoin.length > 0 && (
              <>
                <h1 className="text-white font-extrabold text-2xl mt-6">
                  {name.toUpperCase()}
                  <span className="text-gray-500 ml-2">
                    ({selectedCoin[0]?.name})
                  </span>
                </h1>
                <p className="text-gray-500 mt-2 font-semibold">
                  {name.toUpperCase()} your assets and start earning
                </p>
                <Price selectedCoin={selectedCoin[0]} />
                <Chart selectedCoin={selectedCoin[0]} />
                <Details selectedCoin={selectedCoin[0]} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default index;
