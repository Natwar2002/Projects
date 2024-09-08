import { useEffect, useState } from 'react';
import useFetchCoinData from '../../hooks/useFetchCoinData';
import Loader from '../Loader/Loader';

function SearchBar () {

    const [showInput, setShowInput] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const { data, isError, isLoading, setCoinList, setPage, setStop, coinList, stop, error } = useFetchCoinData();

    useEffect(()=> {

    }, [searchValue]);
    
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

    if(isError) {
        return <div>Error : {error.message}</div>
    }

    function handleInputChange(e) {
        setSearchValue(e.target.value);
    }

    return (
        <>
            { !showInput ? (<button 
                        className="btn btn-ghost btn-circle"
                        onClick={() => setShowInput(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    ) : (
                        <div>
                            <input 
                                type="text" 
                                className='py-2 px-4 rounded-full outline-none transition-opacity duration-300 opacity-100'
                                placeholder='Search crypto...'
                                value={searchValue}
                                onChange={handleInputChange}
                            />
                            <i className="fa-solid fa-xmark absolute top-6 right-6" onClick={() => setShowInput(false)}></i>

                            {/* To do : make a box for suggestions */}
                            <div className='w-[350px] max-h-[300px] absolute z-10 right-6 top-[60px] bg-[#191919] rounded-lg'>
                                { coinList && <div className='px-4 py-2'>No suggestions</div> }
                                { isLoading && <Loader />}
                            </div>
                        </div>
                    )}
        </>
    );
}

export default SearchBar;