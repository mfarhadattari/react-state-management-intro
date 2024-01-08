import { useContext } from "react";
import { ITodo, TODO_ACTION, TodoContext } from "../../provider/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div className="border border-pink-500  p-2 rounded-md w-full">
      <h4>Todo List</h4>
      <ul>
        {state?.map((todo: ITodo) => (
          <li
            className={`${
              todo.isCompleted ? "line-through" : "cursor-pointer"
            }`}
            key={todo?.id}
            onClick={() =>
              dispatch({ type: TODO_ACTION.completeTodo, payload: todo.id })
            }
          >
            {todo?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
