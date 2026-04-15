import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { forgotPasswordService } from "./forgotPasswordService";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="shadow w-25 text-center mx-auto my-5 p-3">
      <form
        onSubmit={handleSubmit((data) => {
          forgotPasswordService(data);
        })}
      >
        <h2 className="text-primary fw-bold">Forgot Password</h2>
        <div className="my-3 form-group">
          <input
            {...register("email", {
              required: { value: true, message: "Email Id is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "Please enter a valid email address (e.g., user@example.com)",
              },
            })}
            className="w-100 form-control"
            type="email"
            placeholder="email id"
          />
          <p style={{ color: "red", textAlign: "left" }}>
            {errors.email && "*" + errors.email.message}
          </p>
        </div>
        <div className="my-3 form-group">
          <input
            className="w-100 btn btn-outline-primary"
            type="submit"
            value="Send Reset Link"
          />
        </div>
        <div className="my-3 form-group">
          <Link
            className="w-100 btn btn-outline-secondary d-block"
            to="/sign-in"
          >
            Back to Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
