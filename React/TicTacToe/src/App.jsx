import GameBoardContainer from "./components/Board/GameBoardContainer";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 shadow-lg p-12 rounded-lg m-8 w-[600px]">
      <h1 className="text-[35px] font-bold">Tic Tac Toe</h1>
      <GameBoardContainer />
    </div>
  );
};

export default App;