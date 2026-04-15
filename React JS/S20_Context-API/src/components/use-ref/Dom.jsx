import { useRef } from "react";

function Dom() {
  const inputRef = useRef(null); //inputRef = {current:DomElement}
  const pRef = useRef(null);
  const h1Ref = useRef();

  const getInputData = () => {
    pRef.current.innerText = inputRef.current.value;
  };

  const modifyUI = () => {
    h1Ref.current.style.color = "blue";
    pRef.current.style.color = "red";
  };

  return (
    <div className="container">
      <h1 ref={h1Ref}>DOM Concept</h1>
      <input
        onChange={getInputData}
        ref={inputRef}
        type="text"
        placeholder="username"
      />
      <button onClick={modifyUI}>Submit</button>
      <p ref={pRef}></p>
    </div>
  );
}

export default Dom;
