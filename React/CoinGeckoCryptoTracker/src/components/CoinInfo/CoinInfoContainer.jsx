import CoinInfo from "./CoinInfo";
import PageLoader from '../../components/PageLoader/PageLoader';
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";

function CoinInfoContainer ({ coinId }) {

    const {days, setDays, setCoinInterval, historicData, isError, isLoading, currency,} = useFetchCoinHistory(coinId);

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