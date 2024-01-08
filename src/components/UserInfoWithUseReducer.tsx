import { FormEvent, useReducer } from "react";

interface IReducerAction {
  type: string;
  payload: string;
}

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: IReducerAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      return currentState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="border p-10 my-10">
      <h3>User Info with User Reducer</h3>
      <form className="mt-4" onSubmit={handelSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="input"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          className="input"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobby", payload: e.target.value })
          }
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="Hobbies"
          className="input"
        />
        <input type="submit" className="btn-primary" />
      </form>
    </div>
  );
};

export default UserInfoWithUseReducer;
