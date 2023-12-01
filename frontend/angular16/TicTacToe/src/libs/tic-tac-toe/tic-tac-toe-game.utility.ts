import { PlayerToPlay } from "./player-to-play";
import { TicTacToeBoardCells, TicTacToeCellSate } from "./tic-tac-toe-cell-state";

export class TicTacToeGameUtility {
  private static boardWidth: number = 3;
  private static boardHeight: number = 3;

  /** Return a new reset board */
  public resetBoard(): TicTacToeBoardCells {
    const newBoardState: TicTacToeBoardCells = [];
    // Create all rows
    for (
      let boardRowIndex = 0;
      boardRowIndex < TicTacToeGameUtility.boardHeight;
      boardRowIndex++
    ) {
      newBoardState.push([]);
      // Create all columns for row
      for (
        let boardColumnIndex = 0;
        boardColumnIndex < TicTacToeGameUtility.boardWidth;
        boardColumnIndex++
      ) {
        newBoardState[boardRowIndex].push(TicTacToeCellSate.Empty);
      }
    }

    return newBoardState;
  }

  /** Check in cell is empty and can change state */
  public canCellChange(
    board: TicTacToeBoardCells,
    rowIndex: number,
    columnIndex: number
  ): boolean {
    return board[rowIndex][columnIndex] === TicTacToeCellSate.Empty;
  }

  /** Return cell state for coordinates */
  public getCellState(
    board: TicTacToeBoardCells,
    rowIndex: number,
    columnIndex: number
  ): TicTacToeCellSate {
    return board[rowIndex][columnIndex];
  }

  /** Return a new board with new state */
  public setCellState(
    board: TicTacToeBoardCells,
    rowIndex: number,
    columnIndex: number,
    state: TicTacToeCellSate
  ): TicTacToeBoardCells {
    // TODO: Handle no 3 size board
    const newBoardState: TicTacToeBoardCells = [
      Object.assign([], board[0]),
      Object.assign([], board[1]),
      Object.assign([], board[2]),
    ];
    newBoardState[rowIndex][columnIndex] = state;

    return newBoardState;
  }

  /** Check if selected player won */
  private hasPlayerWon(board: TicTacToeBoardCells, player: PlayerToPlay): boolean {
    const cellState: TicTacToeCellSate =
      player === PlayerToPlay.PlayerX ? TicTacToeCellSate.X : TicTacToeCellSate.O;
    // TODO: Handle no 3 size board
    return (
      ((board[0][0] === cellState) && (board[0][1] === cellState) && (board[0][2] === cellState)) ||
      ((board[1][0] === cellState) && (board[1][1] === cellState) && (board[1][2] === cellState)) ||
      ((board[2][0] === cellState) && (board[2][1] === cellState) && (board[2][2] === cellState)) ||

      ((board[0][0] === cellState) && (board[1][0] === cellState) && (board[2][0] === cellState)) ||
      ((board[0][1] === cellState) && (board[1][1] === cellState) && (board[2][1] === cellState)) ||
      ((board[0][2] === cellState) && (board[1][2] === cellState) && (board[2][2] === cellState)) ||

      ((board[0][0] === cellState) && (board[1][1] === cellState) && (board[2][2] === cellState)) ||
      ((board[0][2] === cellState) && (board[1][1] === cellState) && (board[2][0] === cellState))
    );
  }

  /** Return who won or null if nobody won */
  public whoWon(board: TicTacToeBoardCells): PlayerToPlay | null {
    // Check il somebody won
    if (this.hasPlayerWon(board, PlayerToPlay.PlayerX)) {
      return PlayerToPlay.PlayerX;
    } else if (this.hasPlayerWon(board, PlayerToPlay.PlayerO)) {
      return PlayerToPlay.PlayerO;
    }

    return null;
  }
}
