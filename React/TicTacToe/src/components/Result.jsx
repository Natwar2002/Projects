import Button from "./Button/Button";

function Result ({message, onRestart}) {
    return (
        <div id="result-card" className="bg-gray-900 text-white text-[35px] m-8 p-12 shadow-md text-center rounded-lg absolute font-bold">
            <p id="winner">{message}</p>
            <Button styleType="white" onRestart={onRestart}/>
        </div>
    );
}

export default Result;