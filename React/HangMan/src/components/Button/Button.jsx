import getButtonStyling from "./getButtonStyleType";

function Button ({text, buttonType, styleType, onClickHandler} ) {

    return (
    <button 
        onClick={onClickHandler}
        type={buttonType}
        className= {`px-4 py-2 ${getButtonStyling(styleType)} rounded-md transition-all`}>
        {text}
    </button>);
}

export default Button;