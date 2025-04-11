import React, { useState } from "react";
import styles from "./board.module.css";
import Box from "./Box";

function Board(): React.ReactNode {
  const gridSize = 8;

  const [selectedTile, setSelected] = useState<{
    row: number;
    col: number;
  } | null>(null);

  function colorTheTile(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const { row, col } = target.dataset;
    setSelected({ row: Number(row), col: Number(col) });
  }

  return (
    <div className={styles.board}>
      {Array.from({ length: gridSize }, (_, row) => {
        return (
          <div key={row} className={styles.row}>
            {Array.from({ length: gridSize }, (_, col) => {
              return (
                <Box
                  key={col}
                  col={col}
                  row={row}
                  onClick={colorTheTile}
                  selectedTile={selectedTile}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
