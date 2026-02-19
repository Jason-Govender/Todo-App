import { createAction } from "redux-actions";
import type { IToDoItem, IToDoStateContext } from "./context";

export enum ToDoActionEnums {
    getToDoPending = "GET_TODO_PENDING",
    getToDoSuccess = "GET_TODO_SUCCESS",
    getToDoError = "GET_TODO_ERROR",

    getToDosPending = "GET_TODOS_PENDING",
    getToDosSuccess = "GET_TODOS_SUCCESS",
    getToDosError = "GET_TODOS_ERROR",

    createToDoPending = "CREATE_TODO_PENDING",
    createToDoSuccess = "CREATE_TODO_SUCCESS",
    createToDoError = "CREATE_TODO_ERROR",

    updateToDoPending = "UPDATE_TODO_PENDING",
    updateToDoSuccess = "UPDATE_TODO_SUCCESS",
    updateToDoError = "UPDATE_TODO_ERROR",
    
    deleteToDoPending = "DELETE_TODO_PENDING",
    deleteToDoSuccess = "DELETE_TODO_SUCCESS",
    deleteToDoError = "DELETE_TODO_ERROR"
}

export const getToDoPending = createAction<IToDoStateContext>(
    ToDoActionEnums.getToDoPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getToDoSuccess = createAction<IToDoStateContext, IToDoItem>(
    ToDoActionEnums.getToDoSuccess,
    (toDoItem: IToDoItem) => ({ isPending: false, isSuccess: true, isError: false, toDoItem })
);

export const getToDoError = createAction<IToDoStateContext>(
    ToDoActionEnums.getToDoError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getToDosPending = createAction<IToDoStateContext>(
    ToDoActionEnums.getToDosPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getToDosSuccess = createAction<IToDoStateContext, IToDoItem[]>(
    ToDoActionEnums.getToDosSuccess,
    (toDoItems: IToDoItem[]) => ({ isPending: false, isSuccess: true, isError: false, toDoItems })
);

export const getToDosError = createAction<IToDoStateContext>(
    ToDoActionEnums.getToDosError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createToDoPending = createAction<IToDoStateContext>(
    ToDoActionEnums.createToDoPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createToDoSuccess = createAction<IToDoStateContext, IToDoItem>(
    ToDoActionEnums.createToDoSuccess,
    (toDoItem: IToDoItem) => ({ isPending: false, isSuccess: true, isError: false, toDoItem })
);

export const createToDoError = createAction<IToDoStateContext>(
    ToDoActionEnums.createToDoError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateToDoPending = createAction<IToDoStateContext>(
    ToDoActionEnums.updateToDoPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateToDoSuccess = createAction<IToDoStateContext, IToDoItem>(
    ToDoActionEnums.updateToDoSuccess,
    (toDoItem: IToDoItem) => ({ isPending: false, isSuccess: true, isError: false, toDoItem })
);

export const updateToDoError = createAction<IToDoStateContext>(
    ToDoActionEnums.updateToDoError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteToDoPending = createAction<IToDoStateContext>(
    ToDoActionEnums.deleteToDoPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteToDoSuccess = createAction<IToDoStateContext, IToDoItem>(
    ToDoActionEnums.deleteToDoSuccess,
    (toDoItem: IToDoItem) => ({ isPending: false, isSuccess: true, isError: false, toDoItem })
);

export const deleteToDoError = createAction<IToDoStateContext>(
    ToDoActionEnums.deleteToDoError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);