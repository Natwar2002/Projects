import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"

function TextInputForm ({handleFormSubmit, inputType = "text", value, handleTextInputChange, setInputType}) {
    
    return (
        <form className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput 
                    label="Enter a word or phrase"
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange}          
                />
            </div>

            <div>
                <Button 
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={()=> setInputType(inputType === "password" ? "text" : "password")}
                    styleType="warning"
                />
            </div>

            <div>
                <Button 
                    text={"OK"}
                    buttonType="submit"
                    styleType={"primary"}
                />
            </div>
        </form>
    );
}

export default TextInputForm;