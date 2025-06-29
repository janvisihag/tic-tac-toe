import { useState } from "react";
import Square from "./square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      {squares.map(function (square, idx) {
        return (
          <Square
            onClick={function () {
              console.log(`square ${idx + 1} clicked`);
            }}
            key={idx}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}
