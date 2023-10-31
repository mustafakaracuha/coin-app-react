import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avvvatars from "avvvatars-react";

import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

import Skeleton from "./Skeleton";
import { getAllCoins, getTrendsCoins } from "../../../services/api";

function Table({ searchText }) {
  const [coinsData, setCoinsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText) {
      const filteredCoins = coinsData.filter(
        (item) =>
          item.coin.toLowerCase().includes(searchText) ||
          item.name.toLowerCase().includes(searchText)
      );
      setCoinsData(filteredCoins);
    } else {
      if (location.pathname === "/all") {
        loadAllCoins();
      } else {
        loadTrendsCoins();
      }
    }
  }, [searchText, name, location.pathname]);

  const loadTrendsCoins = async () => {
    try {
      setIsLoading(true);
      const response = await getTrendsCoins();
      if (response && response.status === 200) {
        setCoinsData(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } catch (apiError) {
      console.log(apiError);
      setIsLoading(false);
    }
  };

  const loadAllCoins = async () => {
    try {
      setIsLoading(true);
      const response = await getAllCoins();
      if (response && response.status === 200) {
        setCoinsData(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } catch (apiError) {
      console.log(apiError);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-[40.625rem] pb-36 overflow-auto">
      {isLoading ? (
        <Skeleton count={7} />
      ) : (
        <table className="min-w-full text-white mt-4 scroll-smooth">
          <thead>
            <tr className="sticky -top-2 bg-black">
              <th className="py-4 text-left text-gray-400 text-lg">Coin</th>
              <th className="py-4 text-left text-gray-400 text-lg">Price</th>
              <th className="py-4 text-right text-gray-400 text-lg">Balance</th>
            </tr>
          </thead>
          <tbody>
            {coinsData.map((item, index) => (
              <tr
                onClick={() =>
                  navigate(`/detail/coin/${item.coin?.toLowerCase()}`)
                }
                key={index}
                className="border-b border-b-gray-800 hover:bg-[#161616] cursor-pointer"
              >
                <td className="flex items-center py-3 text-left font-semibold">
                  <Avvvatars style="shape" size={40} />
                  <div className="ml-4">
                    <p className="mb-2 text-gray-300 text-lg font-semibold">
                      {item.reward_unit}
                    </p>
                    <p className="text-gray-400 w-24 text-sm font-semibold text-ellipsis truncate">
                      {item.name}
                    </p>
                  </div>
                </td>
                <td className="py-3 text-left font-semibold">
                  <p className="mb-2 text-gray-400 text-lg font-semibold">
                    ${item.price?.toString().slice(0, 7)}
                  </p>
                  <p
                    className={
                      item.reward <= "0" || item.reward <= "-1"
                        ? "text-red-400 text-sm font-semibold flex items-start justify-start"
                        : "text-green-400 text-sm font-semibold flex items-start justify-start"
                    }
                  >
                    {item.reward.toString().slice(0, 7)}%
                    {item.reward <= "-1" ? (
                      <BiSolidDownArrow className="ml-2" />
                    ) : (
                      <BiSolidUpArrow className="ml-2" />
                    )}
                  </p>
                </td>
                <td className="py-3 text-right font-semibold">
                  <p className="mb-2 text-gray-300 text-lg font-semibold">
                    ${item.reward_block?.toString().slice(0, 7)}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
