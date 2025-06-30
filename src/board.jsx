import { useEffect, useState } from "react";
import Square from "./square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    const somebodyWon = calculateWinner(squares);
    if (somebodyWon) {
      setWinner(somebodyWon);
    }
  }, [squares]);

  const [winner, setWinner] = useState(null);

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3">
        {squares.map(function (square, idx) {
          return (
            <Square
              onClick={function () {
                if (squares[idx] || winner) return;
                setSquares((prevSquares) => {
                  prevSquares[idx] = xIsNext ? "X" : "O";
                  return [...prevSquares]; //cloning array
                });
                setXIsNext(!xIsNext);
              }}
              key={idx}
            >
              {square}
            </Square>
          );
        })}
      </div>
      {winner ? <div>{winner} won the game.</div> : null}
      <button
        className="py-1.5 px-4 bg-blue-500 rounded-md text-white shadow-md shadow-blue-400 hover:bg-blue-300 hover:text-blue-900"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setWinner(null);
          setXIsNext(true);
        }}
      >
        Reset
      </button>
    </>
  );
}
function calculateWinner(squares) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let winningPattern of winningPatterns) {
    if (squares[winningPattern[0]]) {
      if (
        squares[winningPattern[0]] === squares[winningPattern[1]] &&
        squares[winningPattern[0]] === squares[winningPattern[2]]
      ) {
        return squares[winningPattern[0]];
      }
    }
  }
}
