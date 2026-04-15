import axios from "axios";

const signin_api = "";

export function signinService(data) {
  console.log(data);
  axios
    .post(signin_api, data)
    .then((res) => {
      // Handle success response
      console.log("Sign in successful:", res);
    })
    .catch((error) => {
      // Handle error response
      console.error("Sign in failed:", error);
    });
}
