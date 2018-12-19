import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  ADD_TASK = '[Todo] ADD_TASK',
  REMOVE_TASK = '[Todo] REMOVE_TASK'
}

export class AddTask implements Action {
  readonly type = TodoActionTypes.ADD_TASK;
  constructor(public payload: any) {}
}

export class RemoveTask implements Action {
  readonly type = TodoActionTypes.REMOVE_TASK;
  constructor(public payload: any) {}
}

export type TodoActions = AddTask | RemoveTask;
