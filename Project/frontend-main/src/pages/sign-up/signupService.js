import axios from "axios";
const signup_api = "";

export function createAccountService(data) {
  axios
    .post(signup_api, data)
    .then((res) => {
      //
    })
    .catch((error) => {
      //
    });
}
