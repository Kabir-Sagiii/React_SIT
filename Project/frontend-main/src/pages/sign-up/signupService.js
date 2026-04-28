import axios from "axios";
const signup_api = "http://localhost:7878/api/users/signup";
import { toast } from "react-toastify";
export function createAccountService(data, navigate) {
  axios
    .post(signup_api, data)
    .then((res) => {
      if (res.data.ok) {
        toast.success("Account Created Successfully", {
          autoClose: 1000,
        });
        //navigate to Sign in
        setTimeout(() => {
          navigate("/sign-in");
        }, 1500);
      } else {
        throw Error(res.data.error);
      }
      console.log(res);
    })
    .catch((error) => {
      toast.error("Failed to Create Account", {
        autoClose: 1000,
      });
      console.log(error);
    });
}
