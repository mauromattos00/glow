/* Actions */
import {
    TaskActionTypes,
    TaskActions
} from './../actions/task.actions';

/* Model */
import { Task } from 'src/app/models';

export interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: []
};

export function reducer(state = initialState, action: TaskActions ): TaskState {
    switch (action.type) {
        case TaskActionTypes.LOAD_TASKS: {
            return {
                ...state
            };
        }

        default: {
            return state;
        }
    }
}
