import React from "react";
import styles from "./board.module.css";

interface BoxProps {
  row: number;
  col: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedTile: { row: number; col: number } | null;
}

function Box({ row, col, onClick, selectedTile }: BoxProps) {
  let className = styles.box;
  if (selectedTile) {
    // if diff(row,col) for all the tiles and diff(selectedRow, selectedCol) is also the same,
    // then color it with red
    if (
      row - col === selectedTile.row - selectedTile.col ||
      row + col === selectedTile.row + selectedTile.col
    )
      className += " " + styles.selected;

    // highlighting the clicked tile on the board
    if (row === selectedTile.row && col === selectedTile.col) {
      className += " " + styles.clicked;
    }
  }
  return (
    <button
      className={className}
      onClick={onClick}
      data-row={row}
      data-col={col}
    >
      &nbsp;
    </button>
  );
}

export default Box;
