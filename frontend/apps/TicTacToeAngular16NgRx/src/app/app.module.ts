import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { GameStatusDisplayComponent } from './game-status-display/game-status-display.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, CellComponent, GameStatusDisplayComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
