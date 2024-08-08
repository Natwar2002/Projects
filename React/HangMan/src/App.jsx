import { Routes, Route, useNavigate } from 'react-router-dom'
import StartGame from './Pages/StartGame/StartGame';
import PlayGame from './Pages/PlayGame/PlayGame';
import HomePage from './Pages/HomePage/HomePage';
import Button from './components/Button/Button';
// import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App () {
  const navigate = useNavigate();
  function handleHomeClick () {
    navigate('/');
  }

  function handleStartClick() {
    navigate("/start");
  }

  return (
    <>
      <div>
        <ul className='flex gap-2 m-[2rem] justify-center '>
          <li>
            <Button text={"Home Page"} onClickHandler={handleHomeClick} />
          </li>
          <li>
            <Button text={"Start Game"} onClickHandler={handleStartClick} />
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
        <Route path="*" element={ <div> not found </div> } />
      </Routes>
    </>
  );
}

export default App;