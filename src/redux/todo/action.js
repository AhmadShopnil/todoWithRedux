import { ADDTODO, COMPLETEALL, DELETETODO, CLEARCOMPLETE, TOGGLED, SELECTCOLOUR } from "./actionTypes"

export const addedToDo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo
    }
};

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
};
export const selectedColor = (todoId, color) => {
    return {
        type: SELECTCOLOUR,
        payload: {
            todoId,
            color
        }
    }




};

export const deleteTodo = (todoId) => {
    return {
        type: DELETETODO,
        payload: todoId
    }
};

export const completeAll = () => {
    return {
        type: COMPLETEALL

    }
};

export const clearComplete = () => {
    return {
        type: CLEARCOMPLETE
    }
};