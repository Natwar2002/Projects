// import { useContext } from "react";
// import { CurrencyContext } from "../../context/CurrencyContext";
import { useNavigate } from 'react-router-dom';
import currencyStore from '../../state/store';
import { useState } from 'react';

function Navbar() {

    const { setCurrency } = currencyStore();
    // const {setCurrency} = useContext(CurrencyContext);

    const [showInput, setShowInput] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    function goToHome () {
        navigate('/');
    }

    function handleInputToggle() {
        setShowInput( (prev) => !prev);
    }

    function handleInputChange(e) {
        setSearchValue(e.target.value);
    }
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li onClick={() => setCurrency('inr')}><a>INR</a></li>
                            <li onClick={() => setCurrency('usd')}><a>USD</a></li>
                        </ul>
                    </div>
                </div>
                <div onClick={goToHome} className="navbar-center">
                    <a className="btn btn-ghost text-xl rounded-full">Crypto Tracker</a>
                </div>
                <div className="navbar-end">
                    { !showInput ? (<button 
                        className="btn btn-ghost btn-circle"
                        onClick={handleInputToggle}
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
                        <input 
                            type="text" 
                            className='ml-24 py-2 px-4 rounded-full outline-none transition-opacity duration-300 opacity-100'
                            placeholder='Search crypto...'
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;