import { useState } from "react";
import { TURNS } from "./constants.ts";
import { WinnerModal } from "./components/WinnerModal.tsx"
import { Board } from "./components/Board.tsx";
import { Turn } from "./components/Turn.tsx";
import { checkEndGame, checkWinnerFor } from "./logic/board.ts";
import conffeti from 'canvas-confetti'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  // null significa que no hay ganador, false que hay empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const updateBoard = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinnerFor(newBoard);
    if (newWinner) {
      conffeti()
      setWinner(newWinner);
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    if (newWinner === null && winner === null) {
      setTurn(newTurn);
    }
  }

  return (
    <main className="board">
      <h1>
        Tic tac toe
      </h1>
      <button onClick={resetGame}>Resetear Juego</button>

      <Board updateBoard={updateBoard} board={board} />

      <Turn turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main >
  )
}

export default App

