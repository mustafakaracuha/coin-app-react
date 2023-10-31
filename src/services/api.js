import axios from "axios";

const API_URL = "https://api.minerstat.com"
const trendCoins = "?list=BTC,KAS,ETC,DNX,XMR,RVN,VRSC,NEX,RXD,ERG"


export const getTrendsCoins = () => {
  return axios.get(`${API_URL}/v2/coins${trendCoins}`);
};

export const getAllCoins = () => {
  return axios.get(`${API_URL}/v2/coins`);
};

export const getSelectedCoin = (name) => {
  return axios.get(`${API_URL}/v2/coins?list=${name}`);
};