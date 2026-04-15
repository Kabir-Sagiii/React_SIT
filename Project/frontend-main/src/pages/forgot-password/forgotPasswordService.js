import axios from "axios";

const forgot_password_api = "";

export function forgotPasswordService(data) {
  axios
    .post(forgot_password_api, data)
    .then((res) => {
      // Handle success response
      console.log("Password reset link sent successfully:", res);
    })
    .catch((error) => {
      // Handle error response
      console.error("Failed to send password reset link:", error);
    });
}
