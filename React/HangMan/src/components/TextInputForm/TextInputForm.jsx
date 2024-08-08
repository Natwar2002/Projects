import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"

function TextInputForm ({handleFormSubmit, inputType = "text", value, handleTextInputChange, setInputType, handleHint, hint}) {
    
    return (
        <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
            <div>
                <TextInput 
                    label="Enter a word or phrase"
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange}          
                />

                {/* Todo : fix the show button */}
                {/* <Button 
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={()=> setInputType(inputType === "password" ? "text" : "password")}
                    styleType="warning"
                /> */}
            </div>

            {/* TODO : hint functionality */}
            <div>
                <TextInput 
                    label="Give a hint that corresponds to the word."
                    value={hint}
                    onChange={handleHint}
                />
            </div>

            <div>
                <Button 
                    text={"Start Game"}
                    buttonType="submit"
                    styleType={"primary"}
                />
            </div>
        </form>
    );
}

export default TextInputForm;