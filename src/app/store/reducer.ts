import { TodoActionTypes, TodoActions } from './actions';

export interface TodoState {
  tasks: any[];
}

export let initialState: TodoState = {
  tasks: []
};

export function reducer(state = initialState, action: TodoActions) {
  switch (action.type) {
    case TodoActionTypes.REMOVE_TASK: {
      const task = action.payload;
      return {
        ...state.tasks.filter((el) => el !== task)
      };
    }

    case TodoActionTypes.ADD_TASK: {
      return {
        ...state,
        task: action.payload
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
}
