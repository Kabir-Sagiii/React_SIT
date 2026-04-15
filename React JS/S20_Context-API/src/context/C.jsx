import { useContext } from "react";
import D from "./D";
import MyContext from "./MyContext";
function C() {
  const data = useContext(MyContext);
  return (
    <div className="container">
      <h1>C Component : {data}</h1>
      <hr />
      <D />
    </div>
  );
}

export default C;
