import { useState } from "react";
import GameBoard from "./GameBoard";

function GameBoardContainer () {
    let [board, setBoard] = useState(new Array(9).fill(''));
    let [currentPlayer, setCurrentPlayer] = useState('X');
    let [winnerMessage, setWinnerMessage] = useState('');
    let [showResult, setShowResult] = useState(false);

    const winningSituations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick (event) {
        // console.log("Event Triggered");
        let clickedCell = event.target;
        let clickedCellIndex = parseInt(clickedCell.getAttribute('itemID'));
        console.log(clickedCellIndex);
    
        if(board[clickedCellIndex] != '') return;
    
        const newBoard = board.slice();
        newBoard[clickedCellIndex] = currentPlayer;
        setBoard(newBoard);
        
        clickedCell.textContent = currentPlayer;
    
        if(checkWin(newBoard)) {
          setWinnerMessage(`${currentPlayer} won the match`);
          setShowResult(true);
        } else if (!newBoard.includes('')) {
          setWinnerMessage("It's a draw.");
          setShowResult(true);
        }
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    
    function checkWin(board) {
        for(let i = 0; i < winningSituations.length; i++) {
          let winningSituation = winningSituations[i];
          let [a, b, c] = winningSituation;
          if(board[a] === '' || board[b] === '' || board[c] === '') continue;
          if(board[a] === board[b] && board[b] === board[c]) return true;
        }
        return false;
    }
    
    function restartGame () {
        let cells = document.querySelectorAll('.cell');
        setBoard(new Array(9).fill(''));
        if(currentPlayer === "X") {
          setCurrentPlayer("O");
        } else {
          setCurrentPlayer("X");
        }
        setWinnerMessage('');
        cells.forEach(cell => cell.textContent = '');
        setShowResult(false);
    }

    return (
        <GameBoard 
            handleCellClick={handleCellClick}
            restartGame={restartGame}
            winnerMessage={winnerMessage}
            currentPlayer={currentPlayer}
            showResult={showResult}
        />
    );
}

export default GameBoardContainer;