import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  // State to store the currency data
  const [data, setData] = useState({});

  // URL for fetching currency information
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  // useEffect hook to handle the side effect (fetching data)
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  // Logging data to the console (outside of useEffect)
  console.log(data);

  // Return the currency data
  return data;
}

export default useCurrencyInfo;
