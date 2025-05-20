import React, { useState } from "react";
import "./Circles.css";

const MAX_SIZE = Math.min(window.innerWidth - 120, window.innerHeight - 200);
const MIN_SIZE = 50;

function Circles(): React.ReactNode {
  const [count, setCount] = useState<number>(1);
  const gap = (MAX_SIZE - MIN_SIZE) / count;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > 2000) {
      setCount(1);
      return;
    }
    if (+e.target.value < 1) {
      setCount(1);
      return;
    }
    setCount(+e.target.value);
    return;
  };

  return (
    <div>
      <div>
        <label htmlFor="circles">Number of Circles:</label>
        <input
          type="number"
          id="circles"
          value={count}
          min={0}
          max={2000}
          placeholder="Enter number between 2 and 100"
          onChange={handleChange}
        />
      </div>

      <div className="box" style={{ height: MAX_SIZE, width: MAX_SIZE }}>
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="circle"
            style={{
              height: MAX_SIZE - idx * gap,
              width: MAX_SIZE - idx * gap,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Circles;
