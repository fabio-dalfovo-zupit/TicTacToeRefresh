import { PlayerToPlay } from './player-to-play';
import { TicTacToeBoardCells, TicTacToeCellSate } from './tic-tac-toe-cell-state';

/** Return a new reset board */
export const resetBoard = (): TicTacToeBoardCells => {
  return resetBoard_internal(3, 3);
};

/** Return a new reset board */
const resetBoard_internal = (boardWidth: number, boardHeight: number): TicTacToeBoardCells => {
  const newBoardState: TicTacToeBoardCells = [];
  // Create all rows
  for (let boardRowIndex = 0; boardRowIndex < boardHeight; boardRowIndex++) {
    newBoardState.push([]);
    // Create all columns for row
    for (let boardColumnIndex = 0; boardColumnIndex < boardWidth; boardColumnIndex++) {
      newBoardState[boardRowIndex].push(TicTacToeCellSate.Empty);
    }
  }

  return newBoardState;
};

/** Check in cell is empty and can change state */
export const canCellChange = (board: TicTacToeBoardCells, rowIndex: number, columnIndex: number): boolean => {
  return board[rowIndex][columnIndex] === TicTacToeCellSate.Empty;
};

/** Return cell state for coordinates */
export const getCellState = (board: TicTacToeBoardCells, rowIndex: number, columnIndex: number): TicTacToeCellSate => {
  return board[rowIndex][columnIndex];
};

/** Return a new board with new state */
export const setCellState = (
  board: TicTacToeBoardCells,
  rowIndex: number,
  columnIndex: number,
  state: TicTacToeCellSate
): TicTacToeBoardCells => {
  // TODO: Handle no 3 size board
  const newBoardState: TicTacToeBoardCells = [
    Object.assign([], board[0]),
    Object.assign([], board[1]),
    Object.assign([], board[2])
  ];
  newBoardState[rowIndex][columnIndex] = state;

  return newBoardState;
};

/** Check if selected player won */
const hasPlayerWon = (board: TicTacToeBoardCells, player: PlayerToPlay): boolean => {
  const cellState: TicTacToeCellSate = player === PlayerToPlay.PlayerX ? TicTacToeCellSate.X : TicTacToeCellSate.O;
  // TODO: Handle no 3 size board
  return (
    (board[0][0] === cellState && board[0][1] === cellState && board[0][2] === cellState) ||
    (board[1][0] === cellState && board[1][1] === cellState && board[1][2] === cellState) ||
    (board[2][0] === cellState && board[2][1] === cellState && board[2][2] === cellState) ||
    (board[0][0] === cellState && board[1][0] === cellState && board[2][0] === cellState) ||
    (board[0][1] === cellState && board[1][1] === cellState && board[2][1] === cellState) ||
    (board[0][2] === cellState && board[1][2] === cellState && board[2][2] === cellState) ||
    (board[0][0] === cellState && board[1][1] === cellState && board[2][2] === cellState) ||
    (board[0][2] === cellState && board[1][1] === cellState && board[2][0] === cellState)
  );
};

/** Return who won or null if nobody won */
export const whoWon = (board: TicTacToeBoardCells): PlayerToPlay | null => {
  // Check il somebody won
  if (hasPlayerWon(board, PlayerToPlay.PlayerX)) {
    return PlayerToPlay.PlayerX;
  } else if (hasPlayerWon(board, PlayerToPlay.PlayerO)) {
    return PlayerToPlay.PlayerO;
  }

  return null;
};
