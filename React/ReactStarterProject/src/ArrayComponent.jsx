import { useState } from "react";

function ArrayComponent () {
    const [arr, setArr] = useState([1,34,5,3,53,423,4,23,332,-3]);
    function sortArray () {
        const sortedArr = [...arr].sort((a, b) => a - b);
        setArr(sortedArr);
    }

    function insert () {
        const randomNumber = Math.floor(Math.random() * 100);
        const newArr = [...arr, randomNumber];
        setArr(newArr);
    }

    return (
        <>
            <ul>
                {arr.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
            <button onClick={sortArray}>Sort Array</button>
            <button onClick={insert}>Insert</button>
        </>
    );
}

export default ArrayComponent;