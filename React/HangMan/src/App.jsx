import Button from "./components/Button/Button";

function App () {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Hello World</h1>
      <Button text="Primary" buttonType="submit" styleType="primary" onClickHandler={() => console.log('Primary Clicked')} />
      <Button text="Secondary" buttonType="buttton" styleType="secondary" onClickHandler={() => console.log('Secondary Clicked')} />
      <Button text="Warning" buttonType="buttton" styleType="warning" onClickHandler={() => console.log('Warning Clicked')} />
      <Button text="Error" buttonType="buttton" styleType="error" onClickHandler={() => console.log('Error Clicked')} />
    </div>
  );
}

export default App;