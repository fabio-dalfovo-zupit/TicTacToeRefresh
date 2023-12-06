import { TicTacToeGameUtility, TicTacToeBoardCells, TicTacToeCellSate, PlayerToPlay, TicTacToeGame } from '@libs/tic-tac-toe-game';
import { createReducer, on } from '@ngrx/store';
import * as GameActions from './actions';

export interface State {
  board: TicTacToeBoardCells;
  player: PlayerToPlay;
  playerWon: PlayerToPlay | null;
  isGameActive: boolean;
}

export const initialState: State = {
  board: [],
  player: PlayerToPlay.PlayerX,
  playerWon: null,
  isGameActive: true
};

export const gameReducer = createReducer(
  initialState,
  on(GameActions.resetBoard, () => {
    return initialState;
  }),
  on(GameActions.playerPlayed, (state, { rowIndex, columnIndex }) => {
    // If game is stopped, noone can play
    if (!state.isGameActive) {
      return state;
    }

    if (!TicTacToeGame.canCellChange(state.board, rowIndex, columnIndex)) {
      return state;
    }

    var cellState: TicTacToeCellSate = state.player == PlayerToPlay.PlayerX ? TicTacToeCellSate.X : TicTacToeCellSate.O;
    var nextPlayer: PlayerToPlay = state.player == PlayerToPlay.PlayerX ? PlayerToPlay.PlayerO : PlayerToPlay.PlayerO;
    var newBoard:TicTacToeBoardCells = TicTacToeGame.setCellState(state.board, rowIndex, columnIndex, cellState);
    var whoWon: PlayerToPlay | null = TicTacToeGame.whoWon(newBoard);

    return {
        ...state,
        board: newBoard,
        player: nextPlayer,
        playerWon: whoWon,
        isGameActive: whoWon == null
    };
  })
);
