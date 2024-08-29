import { useState } from "react";
import { useQuery } from "react-query";
import currencyStore from '../state/store';
import { fetchCoinHistoricData } from "../services/fetchCoinHistoricData";

function useFetchCoinHistory (coinId) {
    const { currency } = currencyStore(); 
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');
    const {data: historicData, isLoading, isError} = useQuery(['coinHistoricData', coinId, currency, interval, days], () => fetchCoinHistoricData(coinId, currency, days, interval), {
        cacheTime: 1000 * 120,
        staleTime: 1000 * 120,
    });

    return {
        days,
        setDays,
        setCoinInterval,
        historicData,
        isError,
        isLoading,
        currency,
        interval,
    }
}

export default useFetchCoinHistory;