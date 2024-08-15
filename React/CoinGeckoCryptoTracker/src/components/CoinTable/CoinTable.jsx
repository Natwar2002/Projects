import { fetchCoinData } from "../../Services/fetchCoinData";

function CoinTable() {

    const response = fetchCoinData();
    console.log(response);
    

    return (
        <>
            Coin Table
        </>
    );
}

export default CoinTable;