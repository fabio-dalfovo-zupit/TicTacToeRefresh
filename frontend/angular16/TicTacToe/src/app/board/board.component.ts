import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicTacToeGameService } from 'src/libs/tic-tac-toe/tic-tac-toe-game.service';
import { TicTacToeCellOnClick } from '../cell/cell.component';

@Component({
  selector: 'tic-tac-toe-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  private _unSubscription: Subscription = new Subscription();

  /** Active state of the game */
  private _isGameActive: boolean = true;

  /** Size of cells */
  public cellWidth: number = 30;
  /** Service for the game */
  public ticTacToeGameService: TicTacToeGameService;

  constructor(ticToeGameService: TicTacToeGameService) {
    this.ticTacToeGameService = ticToeGameService;
  }

  ngOnInit(): void {
    // Register active game state change
    this._unSubscription.add(
      this.ticTacToeGameService.isGameActive$.subscribe(
        (isGameActive: boolean) => {
          this._isGameActive = isGameActive;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this._unSubscription.unsubscribe();
  }

  /** Handle click on the button */
  public onClickHandler(params: TicTacToeCellOnClick): void {
    // Check game is active
    if (!this._isGameActive) {
      console.warn('Game not active');
      return;
    }

    // Check cell can change
    if (
      !this.ticTacToeGameService.canCellChange(params.rowIndex, params.columnIndex)
    ) {
      console.warn('Not empty cell');
      return;
    }

    // Set cell played
    this.ticTacToeGameService.playerPlayed(params.rowIndex, params.columnIndex);
  }
}
