import { useState } from "react";
import TextInputForm from "./TextInputForm"

function TextInputFormContainer ({onSubmit}) {
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState("password");
    const [hint, setHint] = useState('');

    function handleFormSubmit (event) {
        event.preventDefault();
        console.log("Form Submitted", value, hint);

        if(value == "" || hint == "") {
            alert("Please enter a valid word and give a hint");
            return;
        }
        onSubmit?.(value, hint);
    }

    function handleTextInputChange (event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleHint(event) {
        setHint(event.target.value);
    }

    return (
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            inputType={inputType}
            setInputType={setInputType}
            handleHint={handleHint}
        />
    )

}

export default TextInputFormContainer;