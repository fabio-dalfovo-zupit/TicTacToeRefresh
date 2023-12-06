import { Component } from '@angular/core';
import { PlayerToPlay } from '@libs/tic-tac-toe-game';

@Component({
  selector: 'tic-tac-toe-game-status-display',
  templateUrl: './game-status-display.component.html',
  styleUrls: ['./game-status-display.component.scss']
})
export class GameStatusDisplayComponent {
//  /** Service for the game */
//  public ticTacToeGameService: TicTacToeRxJsService;
//
//  constructor(ticToeGameService: TicTacToeRxJsService) {
//    this.ticTacToeGameService = ticToeGameService;
//  }

  /** Return the name of the player */
  public playerToName(player: PlayerToPlay | null): string {
    switch (player) {
      case PlayerToPlay.PlayerX:
        return 'X';
      case PlayerToPlay.PlayerO:
        return 'O';
      default:
        return '';
    }
  }

  /** Handle restart request */
  public onRestartHandler(): void {
//    this.ticTacToeGameService.resetBoard();
  }
}
