import { Dispatch, ReactNode, createContext, useReducer } from "react";

interface ITodoProviderProps {
  children: ReactNode;
}

export interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface IAction {
  type: string;
  payload: ITodo | string;
}

interface ITodoContextValue {
  state: ITodo[];
  dispatch: Dispatch<IAction>;
}

export const TodoContext = createContext<ITodoContextValue | null>(null);

export const TODO_ACTION = {
  addTodo: "addTodo",
  completeTodo: "completeTodo",
};

const initialState: ITodo[] = [];

const reducer = (currentState: ITodo[], action: IAction): ITodo[] => {
  switch (action.type) {
    case TODO_ACTION.addTodo:
      return [...currentState, action.payload as ITodo];
    case TODO_ACTION.completeTodo:
      return currentState.map((todo: ITodo) =>
        todo.id === action.payload ? { ...todo, isCompleted: true } : todo
      );

    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: ITodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
