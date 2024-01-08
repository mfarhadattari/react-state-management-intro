import "./App.css";
import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";

const App = () => {
  return (
    <div className="w-4/5 mx-auto mt-10">
      <h1>State Management In React</h1>
      {/* <StateInClassComponent /> */}
      {/* <StateInFuncComponent /> */}
      {/* <UserInfoWithUserState /> */}
      <UserInfoWithUseReducer />
    </div>
  );
};

export default App;
