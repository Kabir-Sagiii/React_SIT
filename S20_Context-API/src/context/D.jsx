import { useContext } from "react";
import MyContext from "./MyContext";

function D() {
  const data = useContext(MyContext);
  return (
    <div className="container">
      <h1>D Component</h1>
      <h4>A Data : {data}</h4>
    </div>
  );
}

export default D;
