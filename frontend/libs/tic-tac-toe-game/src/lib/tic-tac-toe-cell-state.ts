/** Type of the board */
export type TicTacToeBoardCells = Array<Array<TicTacToeCellSate>>;

/** State of the cell, Empty if not player set */
export enum TicTacToeCellSate {
  Empty,
  X,
  O
}
