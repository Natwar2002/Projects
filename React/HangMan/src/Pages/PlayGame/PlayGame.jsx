import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../components/HangMan/HangMan";

function PlayGame () {
    const [usedLetters, setUsedLetters] = useState([]);

    const location = useLocation();
    const wordSelected = location.state?.wordSelected;
    const [step, setStep] = useState(0);
    
    const handleLetterClick = function (letter) {
        if(!(wordSelected.toUpperCase().includes(letter))) {
            setStep(step+1);        
        }        
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div>
            <p>Play Game</p>

            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <hr />

            <div>
                <div>
                    <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                </div>
                <div>                 
                    <HangMan step={step}/>
                </div>
            </div>

            <Link to="/start">Start</Link>
        </div>
    );
}

export default PlayGame;