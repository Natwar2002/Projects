import currencyStore from '../../state/store';
import { useState } from "react";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import { useQuery } from 'react-query';

function useFetchCoinHistory ( coinId) {
    const { currency } = currencyStore(); 
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');
    const {data: historicData, isLoading, isError} = useQuery(['coinHistoricData', coinId, currency, interval, days], () => fetchCoinHistoricData(coinId, currency, days, interval), {
        cacheTime: 1000 * 120,
        staleTime: 1000 * 120,
    });

    return {
        days: days,
        setDays: setDays,
        currency,
        historicData,
        isError,
        isLoading,
        setCoinInterval,
    }
}

export default useFetchCoinHistory;