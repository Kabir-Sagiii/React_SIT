import { useState } from "react";
import B from "./B";
import MyContext from "./MyContext";
function A() {
  const [state, setState] = useState(1000);
  return (
    <div className="container">
      <h1>A Component</h1>
      <button
        onClick={() => {
          setState("Kabir");
        }}
      >
        Modify
      </button>
      <hr />
      <MyContext value={state}>
        <B />
      </MyContext>
    </div>
  );
}

export default A;
