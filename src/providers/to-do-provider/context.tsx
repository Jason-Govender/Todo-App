import {createContext} from 'react';

export interface IToDoItem {
    userid: string;
    todo: string;
    completed: boolean;
}

export interface IToDoStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    toDoItem?: IToDoItem;
    toDoItems?: IToDoItem[];
}

export interface IToDoActionContext {
    getToDoItem: () => void;
    getToDoItems: () => void;
    createToDoItem: (toDoItem: IToDoItem) => void;
    updateToDoItem: (toDoItem: IToDoItem) => void;
    deleteToDoItem: () => void;
}

export const INITIAL_STATE: IToDoStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false
};

export const ToDoStateContext = createContext<IToDoStateContext>(INITIAL_STATE);
export const ToDoActionContext = createContext<IToDoActionContext | undefined>(undefined);