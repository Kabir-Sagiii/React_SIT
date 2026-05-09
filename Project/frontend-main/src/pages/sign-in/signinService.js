import axios from "axios";
import { toast } from "react-toastify";
const signin_api = "http://localhost:7878/api/users/sign-in";

export function signinService(data, navigate, login, setLoggedInUser) {
  axios
    .post(signin_api, data)
    .then((res) => {
      if (res.data.ok) {
        console.log("login", res.data);
        toast.success("User LoggedIn", { autoClose: 1000 });
        login();
        setLoggedInUser(res.data.user);

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
