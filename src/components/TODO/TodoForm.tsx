import { FormEvent, useContext, useState } from "react";
import { TODO_ACTION, TodoContext } from "../../provider/TodoProvider";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const task = {
      id: Math.random().toString(36).slice(2),
      title: title,
      isCompleted: false,
    };

    dispatch({ type: TODO_ACTION.addTodo, payload: task });
  };
  return (
    <div className="border border-red-500 p-2 rounded-md w-full">
      <h4 className="text-center">Todo Form</h4>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="input"
          placeholder="Task Title"
        />
        <input type="submit" className="btn-primary" placeholder="Task Title" />
      </form>
    </div>
  );
};

export default TodoForm;
