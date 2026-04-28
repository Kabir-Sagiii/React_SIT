import axios from "axios";
import { toast } from "react-toastify";
const signin_api = "http://localhost:7878/api/users/sign-in";

export function signinService(data, navigate, login) {
  axios
    .post(signin_api, data)
    .then((res) => {
      console.log(res);
      if (res.data.ok) {
        toast.success("User LoggedIn", { autoClose: 1000 });
        login();
        navigate("/home");
      } else {
        throw Error(res.data.error);
      }
    })
    .catch((error) => {
      // Handle error response
      toast.error(error.message, { autoClose: 1000 });
    });
}
