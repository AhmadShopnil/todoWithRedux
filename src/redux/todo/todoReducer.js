import { ADDTODO, CLEARCOMPLETE, COMPLETEALL, DELETETODO, SELECTCOLOUR, TOGGLED } from './actionTypes';
import initialState from './intialState';

const uniqueId = (todos) => {
    const id = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
    return id + 1;
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return [
                ...state,
                {
                    id: uniqueId(state),
                }
            ];

        case TOGGLED:
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                else {
                    return todo;
                }
            });


        case SELECTCOLOUR:
            const { todoId, color } = action.payload;

            return state.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        color: color
                    }
                }
                else {
                    return todo;
                }
            });

        case DELETETODO:
            return state.filter((todo) => todo.id !== action.payload);


        case COMPLETEALL:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true
                }
            });

        case CLEARCOMPLETE:
            return state.filter((todo) => !todo.completed)

        default:
            return state;
    }
};

export default todoReducer;