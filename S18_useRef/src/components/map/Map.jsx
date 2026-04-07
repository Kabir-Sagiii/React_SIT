// import { useState } from "react";

// function Map() {
//   var [state, setState] = useState([
//     <h3>h3 element</h3>,
//     <div>div</div>,
//     <p>para</p>,
//   ]);
//   return (
//     <div className="container">
//       <h1>Rendering the Data : {state}</h1>
//     </div>
//   );
// }

// export default Map;

import { useState } from "react";

function Map() {
  var [state, setState] = useState([
    "rohan",
    "rakesh",
    "vishal",
    "shivam",
    "kunal",
    "amit", // 100 names
    "riya",
    "sowmya",
    "aditya",
    "ravi",
  ]);
  return (
    <div className="container">
      <h1>Users Information</h1>
      <ol>
        {state.map(function (element) {
          return <li>{element}</li>;
        })}
      </ol>
    </div>
  );
}

export default Map;
