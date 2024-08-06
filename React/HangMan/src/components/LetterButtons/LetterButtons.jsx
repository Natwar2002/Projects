const ALPHABATES = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index));

function LetterButtons({text, usedLetters, onLetterClick}) {
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));
    const originalLetters = new Set(text.toUpperCase().split(''));

    const buttonStyle = function (letter) {
        if(selectedLetters.has(letter)) {
            return originalLetters.has(letter) ? "bg-green-600" : "bg-red-600";
        } else {
            return 'bg-black';
        }
    }

    const handleClick = function (event) {
        const character = event.target.value;
        onLetterClick?.(character);
    } 

    const buttons = ALPHABATES.map(letter => {
        return (
            <button 
                key={`button-${letter}`}
                value={letter}
                className={`h-12 w-12 m-1 border rounded-md focus:outline-none ${buttonStyle(letter)} text-white`}
                disabled={selectedLetters.has(letter)}
                onClick={handleClick}
            >
                {letter}
            </button>
        )
    });
    return (
        <>
           {buttons}
        </>
    );
}

export default LetterButtons;