import { Component } from '@angular/core';
import { TicTacToeCellOnClick } from '../cell/cell.component';

@Component({
  selector: 'tic-tac-toe-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  ngOnInit(): void {
//    // Register active game state change
//    this._unSubscription.add(
//      this.ticTacToeGameService.isGameActive$.subscribe((isGameActive: boolean) => {
//        this._isGameActive = isGameActive;
//      })
//    );
  }

  ngOnDestroy(): void {
//    this._unSubscription.unsubscribe();
  }

  /** Handle click on the button */
  public onClickHandler(params: TicTacToeCellOnClick): void {
//    // Check game is active
//    if (!this._isGameActive) {
//      console.warn('Game not active');
//      return;
//    }
//
//    // Check cell can change
//    if (!this.ticTacToeGameService.canCellChange(params.rowIndex, params.columnIndex)) {
//      console.warn('Not empty cell');
//      return;
//    }
//
//    // Set cell played
//    this.ticTacToeGameService.playerPlayed(params.rowIndex, params.columnIndex);
  }
}
