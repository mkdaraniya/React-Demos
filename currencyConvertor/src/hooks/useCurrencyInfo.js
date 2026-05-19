import {useState, useEffect} from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.5.19/v1/currencies/usd.json
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.5.19/v1/currencies/${currency.toLowerCase()}.json`)
            .then((response) => response.json())
            .then((res) => setData(res[currency]));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;