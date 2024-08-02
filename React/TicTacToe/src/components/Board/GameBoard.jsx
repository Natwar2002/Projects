import Cell from "./Cell";
import Button from "../Button/Button"
import Turn from "./Turn";
import Result from "../Result";

const GameBoard = ({currentPlayer, handleCellClick, restartGame, showResult, winnerMessage}) => {

    return (
        <>
            <Turn currentPlayer={currentPlayer}/>
            <div className="grid grid-cols-3" onClick={handleCellClick}>
                <Cell itemID="0" />
                <Cell itemID="1" />
                <Cell itemID="2" />
                <Cell itemID="3" />
                <Cell itemID="4" />
                <Cell itemID="5" />
                <Cell itemID="6" />
                <Cell itemID="7" />
                <Cell itemID="8" />     
            </div>
            <Button styleType="black" onRestart={restartGame}/>

            {/* Short Circuiting */}
            {showResult && <Result message={winnerMessage} onRestart={restartGame} />}
        </>
      );
}

export default GameBoard;