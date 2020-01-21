import axios from "axios";

const createUrl = (type, symbol) =>
  `https://www.alphavantage.co/query?function=${type}&symbol=${symbol.toUpperCase()}&interval=60min&time_period=10&series_type=close&apikey=PM5A`;

const fetchApiData = async (type, symbol) => {
  try {
    const response = await axios.get(createUrl(type, symbol));
    return response.data;
  } catch (err) {
    return err;
  }
};

export default fetchApiData;
