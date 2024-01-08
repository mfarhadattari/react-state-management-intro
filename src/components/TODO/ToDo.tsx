import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TODO = () => {
  return (
    <div className="flex flex-col justify-center items-center border border-purple-500 m-2 p-2 rounded-md">
      <h1>TODO APP</h1>
      <div className="flex gap-5 w-full mt-4">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TODO;
