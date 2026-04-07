import { useReducer } from "react";

function myReducer(state, action) {
  var newState;
  if (action.type === "inc") {
    newState = state + 1;
  } else if (action.type === "dec") {
    newState = state - 1;
  }

  return newState;
}

function Counter() {
  const [state, dispatch] = useReducer(myReducer, 0);
  return (
    <div className="container">
      <h1>Count Value is : {state}</h1>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        inc Count
      </button>{" "}
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        dec Count
      </button>
    </div>
  );
}

export default Counter;
