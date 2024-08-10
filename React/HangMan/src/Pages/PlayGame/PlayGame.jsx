import { useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/HangMan/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../components/HangMan/HangMan";
import Result from "../Result/Result";

function PlayGame () {
    const [usedLetters, setUsedLetters] = useState([]);

    const location = useLocation();
    const wordSelected = location.state?.wordSelected;
    const givenHint = location.state?.givenHint;

    const [step, setStep] = useState(0);
    
    const handleLetterClick = function (letter) {
        if(!(wordSelected.toUpperCase().includes(letter))) {
            setStep(step+1);        
        }        
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div className="p-10 flex justify-around mx-[10rem] relative">

            <div className="flex flex-col items-center">
                <p className="text-lg py-1 px-3">Hint : {givenHint.toUpperCase()}</p>

                <div className="font-medium my-[2rem] text-xl">
                    <MaskedText text={wordSelected} usedLetters={usedLetters} />
                </div>

                <div className="w-[450px] text-center">
                    <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                </div>
            </div>

            <div className="item-end">                 
                <HangMan step={step}/>
            </div>

            { step >= 7 && <Result message="Oops Try again" />}
            { }
        </div>
    );
}

export default PlayGame;