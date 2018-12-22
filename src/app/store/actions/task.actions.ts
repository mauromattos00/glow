import { Action } from '@ngrx/store';

export enum TaskActionTypes {
  LOAD_TASKS = '[Task] Load Tasks',
  REMOVE_TASK = '[Tasks] Remove Task'
}

export class LoadTasks implements Action {
  readonly type = TaskActionTypes.LOAD_TASKS;
}

export class RemoveTask implements Action {
  readonly type = TaskActionTypes.REMOVE_TASK;
  constructor(public payload: any) {}
}

export type TaskActions = LoadTasks | RemoveTask;
