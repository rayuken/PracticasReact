import { useState } from "react";

export default function GameBoard({ OnHandleSelectSquare, gameBoard }) {
  return (
    <ol id="game-board">
      {gameBoard.map((rowData, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowData.map((columnData, columnIndex) => (
              <li key={`column-${rowIndex}-${columnIndex}`}>
                <button
                  onClick={() => OnHandleSelectSquare(rowIndex, columnIndex)}
                  disabled={columnData != null}
                >
                  {columnData}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
