export function getAllCharacters (text, usedLetters) {
    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const guessedLetter = new Set(usedLetters);

    const characters = text.toUpperCase().split('').map((char)=> {
        if(guessedLetter.has(char)) {
            return char;
        } else {
            return '_';
        }
    });
    return characters.join('');
}