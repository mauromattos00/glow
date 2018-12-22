import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import {
  environment
} from '../../../environments/environment';

import * as fromTask from './task.reducer';

export interface AppState {
  tasks: fromTask.TaskState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  tasks: fromTask.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
