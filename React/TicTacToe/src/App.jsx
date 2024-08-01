import GameBoard from "./components/Board/GameBoard";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 shadow-lg p-12 rounded-lg m-8 w-[600px]">
      <h1 className="text-[35px] font-bold">Tic Tac Toe</h1>
      <GameBoard />
    </div>
  );
};

export default App;