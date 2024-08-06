import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";

function PlayGame () {
    const [usedLetters, setUsedLetters] = useState([]);

    const location = useLocation();
    const wordSelected = location.state?.wordSelected;
    
    const handleLetterClick = function (letter) {
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div>
            <p>Play Game</p>

            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <hr />

            <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />

            <hr />
            <Link to="/start">Start</Link>
        </div>
    );
}

export default PlayGame;