import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //{} empty object for making it safe(contengcy plan) from crash in case of empty response, so that we can loop on empty object
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json) // response converted to json format
      .then((res) => setData(res[currency])); // assign json data to useState so that it can be updated in UI, also to access to using key value usin res[currency]
    console.log(data);
  }, [currency]); // whenever there will be nay change in currency, useEffect will be fired again
  return data;
}

export default useCurrencyInfo;
