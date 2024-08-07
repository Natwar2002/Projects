/**
 * @param {string} text - the word to be guessed 
 * @param {string[]} usedLetters - letters that have been guessed so far 
 * @returns 
 */

import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({text, usedLetters}) {
    const letters = getAllCharacters(text, usedLetters);
    
    return (
        <>
            {letters.split('').map((letter, index) => {
                return (
                    <span key={index} className="inline-block mx-1">{letter}</span>
                )
            })}
        </>
    );
}

export default MaskedText;