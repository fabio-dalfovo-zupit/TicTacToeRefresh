import { Component } from '@angular/core';
import { PlayerToPlay } from '../../libs/tic-tac-toe/player-to-play';
import { TicTacToeGameService } from '../../libs/tic-tac-toe/tic-tac-toe-game.service';

@Component({
  selector: 'tic-tac-toe-game-status-display',
  templateUrl: './game-status-display.component.html',
  styleUrls: ['./game-status-display.component.scss'],
})
export class GameStatusDisplayComponent {
  /** Service for the game */
  public ticTacToeGameService: TicTacToeGameService;

  constructor(ticToeGameService: TicTacToeGameService) {
    this.ticTacToeGameService = ticToeGameService;
  }

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
    this.ticTacToeGameService.resetBoard();
  }
}
