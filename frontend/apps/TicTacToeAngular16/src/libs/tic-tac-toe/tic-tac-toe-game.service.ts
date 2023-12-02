import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TicTacToeGameUtility, TicTacToeBoardCells, TicTacToeCellSate, PlayerToPlay } from '@libs/tic-tac-toe-game';

export class TicTacToeGameService {
  /** Utility to manage game */
  private _gameUtility: TicTacToeGameUtility;

  private _boardSubject: BehaviorSubject<TicTacToeBoardCells> =
    new BehaviorSubject<TicTacToeBoardCells>([]);
  /** Observable for the board of the game */
  public board$: Observable<TicTacToeBoardCells> =
    this._boardSubject.asObservable();

  private _playerWonSubject: Subject<PlayerToPlay | null> =
    new Subject<PlayerToPlay | null>();
  /** Observable for player has won */
  public playerWon$: Observable<PlayerToPlay | null> =
    this._playerWonSubject.asObservable();

  private _playerSubject: BehaviorSubject<PlayerToPlay> =
    new BehaviorSubject<PlayerToPlay>(PlayerToPlay.PlayerX);
  /** Observable for current player */
  public player$: Observable<PlayerToPlay> = this._playerSubject.asObservable();

  private _isGameActiveSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  /** Observable for state of the game. When true, players can play, otherwise the game is stoppen */
  public isGameActive$: Observable<boolean> =
    this._isGameActiveSubject.asObservable();

  constructor(board: TicTacToeBoardCells, gameUtility: TicTacToeGameUtility) {
    this._gameUtility = gameUtility;

    // When board check events
    this.board$
      .pipe(filter((board: TicTacToeBoardCells) => board && board.length > 0))
      .subscribe((board: TicTacToeBoardCells) => {
        const whoWon: PlayerToPlay | null = this._gameUtility.whoWon(board);
        // If someone won, emit event
        if (whoWon != null) {
          this._playerWonSubject.next(whoWon);
          // Stop the game
          this._isGameActiveSubject.next(false);
        }
      });

    this._boardSubject.next(board);
  }

  /** Return a new reset board */
  public resetBoard(): void {
    // Current player X
    this._playerSubject.next(PlayerToPlay.PlayerX);
    // Noone won
    this._playerWonSubject.next(null);
    // Set game active
    this._isGameActiveSubject.next(true);
    // Set empty board
    this._boardSubject.next(this._gameUtility.resetBoard());
  }

  /** Check in cell is empty and can change state */
  public canCellChange(rowIndex: number, columnIndex: number): boolean {
    // If game is stopped, noone can play
    if (!this._isGameActiveSubject.getValue()) {
      return false;
    }

    return this._gameUtility.canCellChange(
      /* board */ this._boardSubject.getValue(),
      /* rowIndex */ rowIndex,
      /* columnIndex */ columnIndex
    );
  }

  /** Return cell state for coordinates */
  public getCellState(
    rowIndex: number,
    columnIndex: number
  ): TicTacToeCellSate {
    return this._gameUtility.getCellState(
      /* board */ this._boardSubject.getValue(),
      /* rowIndex */ rowIndex,
      /* columnIndex */ columnIndex
    );
  }

  /** Set player at the cell */
  public playerPlayed(rowIndex: number, columnIndex: number): void {
    // If game is stopped, noone can play
    if (!this._isGameActiveSubject.getValue()) {
      return;
    }

    const currentBoardState: TicTacToeBoardCells =
      this._boardSubject.getValue();
    const currentPlayer: PlayerToPlay = this._playerSubject.getValue();

    // Save current board state
    let newBoardState: TicTacToeBoardCells;
    switch (currentPlayer) {
      case PlayerToPlay.PlayerX:
        newBoardState = this._gameUtility.setCellState(
          /* board */ currentBoardState,
          /* rowIndex */ rowIndex,
          /* columnIndex */ columnIndex,
          /* state */ TicTacToeCellSate.X
        );
        this._playerSubject.next(PlayerToPlay.PlayerO);
        break;
      case PlayerToPlay.PlayerO:
        newBoardState = this._gameUtility.setCellState(
          /* board */ currentBoardState,
          /* rowIndex */ rowIndex,
          /* columnIndex */ columnIndex,
          /* state */ TicTacToeCellSate.O
        );
        this._playerSubject.next(PlayerToPlay.PlayerX);
        break;
    }

    this._boardSubject.next(newBoardState);
  }
}
