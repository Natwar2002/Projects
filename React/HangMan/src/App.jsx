import { Routes, Route } from 'react-router-dom'
import StartGame from './Pages/StartGame/StartGame';
import PlayGame from './Pages/PlayGame/PlayGame';
// import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App () {
  return (
    <div>
      {/* <h1 className="text-3xl font-semibold">Welcome to HangMan</h1>
      <TextInputFormContainer onSubmit={ value => console.log("Value coming from form is : ", value)}/> */}
      <div>
        Navbar
      </div>
      <Routes>
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
        <Route path="*" element={ <div> not found </div> } />
      </Routes>

    </div>
  );
}

export default App;