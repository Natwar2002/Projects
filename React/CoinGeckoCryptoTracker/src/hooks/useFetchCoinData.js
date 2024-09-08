import { useState } from "react";
import { useQuery } from "react-query";
import currencyStore from '../state/store';
import { fetchCoinData } from "../services/fetchCoinData";

function useFetchCoinData () {

    const [page, setPage] = useState(1);
    const [coinList, setCoinList] = useState([]);
    const [stop, setStop] = useState(false);
    const { currency } = currencyStore();
    // const {currency} = useContext(CurrencyContext);

    const {data, isLoading, isError, error} = useQuery(['coins', currency, page], () => fetchCoinData(currency, page), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        // Stops making the API call if the data is already present in the cache
        staleTime: 1000 * 60 * 2,
        keepPreviousData: true,
        onSuccess: () => setStop(false),
    });

    return {
        page,
        setPage,
        stop,
        setStop,
        coinList,
        setCoinList,
        data,
        isError,
        isLoading,
        error
    }
}


export default useFetchCoinData;