
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App () {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Welcome to HangMan</h1>
      <TextInputFormContainer onSubmit={ value => console.log("Value coming from form is : ", value)}/>

    </div>
  );
}

export default App;