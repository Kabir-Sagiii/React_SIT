import axios from "axios";

const signin_api = "http://localhost:7878/api/users/sign-in";

export function signinService(data, navigate) {
  axios
    .post(signin_api, data)
    .then((res) => {
      console.log(res);
      if (res.data.ok) {
        alert("User Signed In");
        navigate("/home");
      } else {
        throw Error(res.data.error);
      }
    })
    .catch((error) => {
      // Handle error response
      alert(error.message);
      console.error("Sign in failed:", error);
    });
}
