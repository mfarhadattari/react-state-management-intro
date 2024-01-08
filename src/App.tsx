import "./App.css";
import TODO from "./components/TODO/ToDo";
import TodoProvider from "./provider/TodoProvider";

const App = () => {
  return (
    <div className="w-4/5 mx-auto mt-10">
      <h1>State Management In React</h1>
      {/* <StateInClassComponent /> */}
      {/* <StateInFuncComponent /> */}
      {/* <UserInfoWithUserState /> */}
      {/* <UserInfoWithUseReducer /> */}
      <TodoProvider>
        <TODO />
      </TodoProvider>
    </div>
  );
};

export default App;
