import { useRef } from "react";

function Dom() {
  const inputRef = useRef(null); //inputRef = {current:DomElement}
  const pRef = useRef(null);

  const getInputData = () => {
    pRef.current.innerText = inputRef.current.value;
  };

  return (
    <div className="container">
      <h1>DOM Concept</h1>
      <input
        onChange={getInputData}
        ref={inputRef}
        type="text"
        placeholder="username"
      />
      <button>Submit</button>
      <p ref={pRef}></p>
    </div>
  );
}

export default Dom;
