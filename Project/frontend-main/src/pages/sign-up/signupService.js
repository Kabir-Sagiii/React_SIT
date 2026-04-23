import axios from "axios";
const signup_api = "http://localhost:7878/api/users/signup";

export function createAccountService(data, navigate) {
  axios
    .post(signup_api, data)
    .then((res) => {
      if (res.data.ok) {
        alert("user account created");
        //navigate to Sign in
        navigate("/sign-in");
      } else {
        throw Error(res.data.error);
      }
      console.log(res);
    })
    .catch((error) => {
      alert("failed to create account");
      console.log(error);
    });
}
