import Button from "./Button/Button";

function Result ({message, onRestart}) {
    return (
        <div id="result-card" style={{display : 'block'}} className="bg-gray-900 text-white text-[35px] hidden m-8 p-12 shadow-md text-center rounded-lg absolute">
            <p id="winner">{message}</p>
            <Button styleType="white" onRestart={onRestart}/>
        </div>
    );
}

export default Result;