import { getAxiosInstance } from "../../utils/axiosInstance";
import { INITIAL_STATE, ToDoActionContext, ToDoStateContext } from "./context";
import type { IToDoItem } from "./context";
import { ToDoReducer } from "./reducer";
import { useContext, useReducer, useCallback, useMemo } from "react";
import { getToDoError, 
    getToDoPending, 
    getToDoSuccess, 
    getToDosError, 
    getToDosPending, 
    getToDosSuccess, 
    createToDoPending, 
    createToDoError, 
    updateToDoSuccess, 
    createToDoSuccess, 
    updateToDoPending, 
    updateToDoError, 
    deleteToDoPending, 
    deleteToDoSuccess, 
    deleteToDoError} from "./actions";

import axios from "axios";

  export const ToDoProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(ToDoReducer, INITIAL_STATE);
    const instance = useMemo(() => getAxiosInstance(), []);

    const getToDoItems = useCallback(async() => {
        dispatch(getToDosPending());
        
        const endpoint =  import.meta.env.VITE_BACKEND_API_URL;
        await axios(endpoint)
        .then((response) => {
            dispatch(getToDosSuccess(response.data.todos));
        })
        .catch((error) => {
            console.error(error);
            dispatch(getToDosError());
        });
        
    }, [dispatch]);

    const getToDoItem = useCallback(async() => {
        dispatch(getToDoPending());
        const endpoint = `/1`;
        await instance.get(endpoint)
        .then((response) => {
            dispatch(getToDoSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(getToDoError());
        });
    }, [dispatch, instance]);

    const createToDoItem = useCallback(async(toDoItem: IToDoItem) => {
        dispatch(createToDoPending());
        const endpoint = `/add`;
        await instance.post(endpoint, toDoItem)
        .then((response) => {
            dispatch(createToDoSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(createToDoError());
        });
    }, [dispatch, instance]);

    const updateToDoItem = useCallback(async( toDoItem: IToDoItem) => {
        dispatch(updateToDoPending());
        const endpoint = `/1`;
        await instance.put(endpoint, toDoItem)
        .then((response) => {
            dispatch(updateToDoSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(updateToDoError());
        });
    }, [dispatch, instance]);

    const deleteToDoItem = useCallback(async() => {
        dispatch(deleteToDoPending());
        const endpoint = `/1`;
        await instance.delete(endpoint)
        .then((response) => {   
            dispatch(deleteToDoSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(deleteToDoError());
        });
    }, [dispatch, instance]);

    return(
        <ToDoStateContext.Provider value={state}>
            <ToDoActionContext.Provider value={useMemo(() => ({getToDoItem, getToDoItems, createToDoItem, updateToDoItem, deleteToDoItem}), [getToDoItem, getToDoItems, createToDoItem, updateToDoItem, deleteToDoItem])}>
                {children}
            </ToDoActionContext.Provider>
        </ToDoStateContext.Provider>
    )
   
};

const useToDoStateInternal = () => {
    const context = useContext(ToDoStateContext);
    if (!context) {
        throw new Error('useToDoState must be used within a ToDoProvider');
    }
    return context;
}

const useToDoActionsInternal = () => {
    const context = useContext(ToDoActionContext);
    if (!context) {
        throw new Error('useToDoActions must be used within a ToDoProvider');
    }    return context;
}

ToDoProvider.useToDoState = useToDoStateInternal;
ToDoProvider.useToDoActions = useToDoActionsInternal;