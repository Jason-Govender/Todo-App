import { handleActions } from "redux-actions";
import type { IToDoStateContext } from "./context";
import { INITIAL_STATE } from "./context";
import { ToDoActionEnums } from "./actions";

export const ToDoReducer = handleActions<IToDoStateContext, IToDoStateContext>({
    [ToDoActionEnums.getToDoPending]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.getToDoSuccess]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.getToDoError]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.getToDosPending]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.getToDosSuccess]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.getToDosError]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.createToDoPending]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.createToDoSuccess]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.createToDoError]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.updateToDoPending]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.updateToDoSuccess]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.updateToDoError]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.deleteToDoPending]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.deleteToDoSuccess]: (state, action) => ({ ...state, ...action.payload }),
    [ToDoActionEnums.deleteToDoError]: (state, action) => ({ ...state, ...action.payload }),
}, INITIAL_STATE);