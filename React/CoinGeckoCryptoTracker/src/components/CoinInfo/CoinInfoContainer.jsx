import { useQuery } from "react-query";
import CoinInfo from "./CoinInfo";
import currencyStore from '../../state/store';
import { useState } from "react";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import PageLoader from '../../components/PageLoader/PageLoader';
import Alert from "../Alert/Alert";

function CoinInfoContainer ({ coinId }) {

    const { currency } = currencyStore(); 
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');
    const {data: historicData, isLoading, isError} = useQuery(['coinHistoricData', coinId, currency, interval, days], () => fetchCoinHistoricData(coinId, currency, days, interval), {
        cacheTime: 1000 * 120,
        staleTime: 1000 * 120,
    });

    if(isLoading) {
        return <PageLoader />
    }

    if(isError) {
        return <Alert message="Error fetching data" type="error" />
    }

    return (
        <>
            <CoinInfo
                historicData={historicData}
                setCoinInterval={setCoinInterval}
                setDays={setDays}
                days={days}
                currency={currency}
            />
        </>
    );
}

export default CoinInfoContainer;