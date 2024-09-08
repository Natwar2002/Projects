// import { CurrencyContext } from "../../context/CurrencyContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import useFetchCoinData from "../../hooks/useFetchCoinData";

function CoinTable() {

    const { data, isError, isLoading, setCoinList, setPage, setStop, coinList, error, stop } = useFetchCoinData();

    const navigate = useNavigate();

    useEffect( ()=> {
        if(data) {
            setCoinList((pre) => [...pre, ...data]);
        }
    }, [data, setCoinList]);

    useEffect(()=> {
        const scrollEffect = () => {
            const userScrolled = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullPageHeight = document.documentElement.scrollHeight;
            if(userScrolled + windowHeight > fullPageHeight - 500 && !stop) {
                setPage((prePage) => prePage + 1);
                setStop(true);
            }
        };
        window.addEventListener("scroll", scrollEffect);
        return () => window.removeEventListener('scroll', scrollEffect);
    },[setPage, setStop, stop])

    function handleCoinRedirect (coinId) {
        navigate(`/details/${coinId}`)
    }

    if(isError) {
        return <div>Error : {error.message}</div>
    }

    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black px-2 py-4 font-semibold flex items-center justify-center rounded-md">
                <div className="basis-[35%] px-5">Coin</div>
                <div className="basis-[25%]">Price</div>
                <div className="basis-[20%]">24h Change</div>
                <div className="basis-[20%]">Market Cap</div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div className="flex px-[auto]"><Loader /></div> }
                {coinList && coinList.map((coin) => {
                    return (
                        <div onClick={() => handleCoinRedirect(coin.id) } key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">

                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image}className="w-full h-full" />
                                </div>

                                <div className="flex flex-col">
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-sm">{coin.symbol}</div>
                                </div>

                            </div>

                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>

                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>

                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>
                        </div>
                    );
                })}
                
            </div>
            {/* <div className="flex gap-4 justify-center items-center">
                <button 
                    disabled={page === 1}
                    onClick={() => setPage(page-1)}
                    className="btn btn-primary rounded-full px-12 text-lg"
                >
                    Prev 
                </button>
                <button 
                    className="btn btn-primary rounded-full px-12 text-lg"
                    onClick={() => setPage(page+1)}
                    >
                        Next
                    </button>
            </div> */}
        </div>
    );
}

export default CoinTable;