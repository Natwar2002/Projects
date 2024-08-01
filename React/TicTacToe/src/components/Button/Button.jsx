import getStyleType from "./getStyleType";

function Button ({styleType, onRestart}) {

    return (
        <>
            <button className={`bg-opacity-90 border-none ${getStyleType(styleType)} px-4 py-1.5 text-center no-underline text-[15px] font-medium cursor-pointer rounded-full`} onClick={onRestart}>Restart Game</button>
        </>
    );
}

export default Button;