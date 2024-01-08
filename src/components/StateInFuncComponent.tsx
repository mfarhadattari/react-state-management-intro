import { useState } from "react";
import FunctionalCounter from "./FunctionalCounter";

const StateInFuncComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="border border-yellow-600 p-10">
      <h1>State in Functional Component</h1>
      <FunctionalCounter count={count} setCount={setCount} />
    </div>
  );
};

export default StateInFuncComponent;
