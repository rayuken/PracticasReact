import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";
import Log from "./components/Log";
import { initialGameBoard, WINNING_COMBINATIONS } from "./data";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurns) {
  let currentActivePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentActivePlayer = "O";
  }
  return currentActivePlayer;
}
function deriveWinner(gameBoard, players, gameTurns) {
  let winner = null;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, column } = square;
    gameBoard[row][column] = player;
  }
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  const currentActivePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  const winner = deriveWinner(gameBoard, players, gameTurns);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(row, column) {
    setGameTurns((prevGameTurns) => {
      let currentActivePlayer = deriveActivePlayer(prevGameTurns);
      const updateGameTurn = [
        { square: { row, column }, player: currentActivePlayer },
        ...prevGameTurns,
      ];
      return updateGameTurn;
    });
  }
  function rematch() {
    setGameTurns([]);
  }
  function handlePlayerChangeName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }
  return (
    <main>
      <div id="game-container">
        <Player
          activePlayer={currentActivePlayer}
          handlePlayerChangeName={handlePlayerChangeName}
        />
        {(winner || hasDraw) && (
          <GameOver hasDraw={hasDraw} winner={winner} rematch={rematch} />
        )}
        <GameBoard
          OnHandleSelectSquare={handleSelectSquare}
          gameBoard={gameBoard}
        />
      </div>
      {gameTurns.length > 0 && <Log turns={gameTurns} />}
    </main>
  );
}

export default App;
