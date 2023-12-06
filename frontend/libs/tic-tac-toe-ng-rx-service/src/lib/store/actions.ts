import { createAction, props } from '@ngrx/store';

export const resetBoard = createAction('[TicTacToe] Reset');
export const playerPlayed = createAction('[TicTacToe] Player played', props<{ rowIndex: number, columnIndex: number }>());

