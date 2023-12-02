import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TicTacToeCellSate } from '@libs/tic-tac-toe-game';

/** Data of onClick event */
export interface TicTacToeCellOnClick {
  rowIndex: number;
  columnIndex: number;
}

@Component({
  selector: 'tic-tac-toe-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent {
  /** Size of cell, default value is 20px */
  @Input() public set _cellWidth(value: number) {
    // Set host element width
  }

  /** Row index, value must be passed */
  @Input() public rowIndex!: number;
  /** Column index, value must be passed */
  @Input() public columnIndex!: number;
  /** State of the cell, default state is Empty */
  @Input() public cellState: TicTacToeCellSate = TicTacToeCellSate.Empty;

  /** On user click on button event */
  @Output() public cellClick: EventEmitter<TicTacToeCellOnClick> =
    new EventEmitter<TicTacToeCellOnClick>();

  /** Handle click on the button */
  public onClickHandler(): void {
    this.cellClick.emit(<TicTacToeCellOnClick>{
      rowIndex: this.rowIndex,
      columnIndex: this.columnIndex,
    });
  }

  /** Render cell state */
  public renderCellState(): string {
    switch (this.cellState) {
      case TicTacToeCellSate.Empty:
      default:
        return ' ';
      case TicTacToeCellSate.X:
        return 'X';
      case TicTacToeCellSate.O:
        return 'O';
    }
  }
}
