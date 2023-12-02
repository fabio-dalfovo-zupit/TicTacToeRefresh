import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { GameStatusDisplayComponent } from './game-status-display/game-status-display.component';
import { TicTacToeGameUtility, TicTacToeCellSate } from '@libs/tic-tac-toe-game';
import { TicTacToeRxJsService } from '@libs/tic-tac-toe-rx-js-service';

/** TicTacToeGameService */
const ticTacToeGameServiceFactory = (gameUtility: TicTacToeGameUtility) => {
  return new TicTacToeRxJsService(
    [
      [TicTacToeCellSate.Empty, TicTacToeCellSate.Empty, TicTacToeCellSate.Empty],
      [TicTacToeCellSate.Empty, TicTacToeCellSate.Empty, TicTacToeCellSate.Empty],
      [TicTacToeCellSate.Empty, TicTacToeCellSate.Empty, TicTacToeCellSate.Empty]
    ],
    gameUtility
  );
};
const ticTacToeGameServiceProvider = {
  provide: TicTacToeRxJsService,
  useFactory: ticTacToeGameServiceFactory,
  deps: [TicTacToeGameUtility]
};

@NgModule({
  declarations: [AppComponent, BoardComponent, CellComponent, GameStatusDisplayComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TicTacToeGameUtility, ticTacToeGameServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
