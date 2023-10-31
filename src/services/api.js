import axios from "axios";

export const getTrendsCoins = () => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/v2/coins${import.meta.env.VITE_APP_TREND_COINS}`);
};

export const getAllCoins = () => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/v2/coins`);
};

export const getSelectedCoin = (name) => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/v2/coins?list=${name}`);
};
