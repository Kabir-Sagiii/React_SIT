import { useState } from "react";
import "./State.css";

function State() {
  var [state, setState] = useState("Facebook");
  var [image, setImage] = useState(
    "https://static.xx.fbcdn.net/rsrc.php/yb/r/HpEiFYDux5j.webp",
  );

  function updateToInstagram() {
    setState("Instagram");
    setImage("https://static.cdninstagram.com/rsrc.php/yR/r/92ZsVHNkyvf.webp");
  }

  function updateToFacebook() {
    setState("Facebook");
    setImage("https://static.xx.fbcdn.net/rsrc.php/yb/r/HpEiFYDux5j.webp");
  }

  return (
    <div className="state">
      <h1>{state}</h1>
      <img src={image} width={300} height={300} alt="" />
      <br />
      <br />
      <button onClick={updateToInstagram}>Instagram</button>
      &nbsp;&nbsp;
      <button onClick={updateToFacebook}>Facebook</button>
    </div>
  );
}

export default State;
