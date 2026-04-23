import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signinService } from "./signinService";

function Signin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="shadow w-25 text-center mx-auto my-5 p-3">
      <form
        onSubmit={handleSubmit((data) => {
          signinService(data, navigate);
        })}
      >
        <h2 className="text-primary fw-bold">Sign In</h2>
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
            className="w-100 form-control"
            type="password"
            placeholder="password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <p style={{ color: "red", textAlign: "left" }}>
            {errors.password && "*" + errors.password.message}
          </p>
        </div>
        <div className="my-3 form-group">
          <input
            className="w-100 btn btn-outline-primary"
            type="submit"
            value="Sign In"
          />
        </div>
        <div className="my-3 form-group">
          <Link
            className="w-100 btn btn-outline-primary d-block"
            to="/forgot-password"
          >
            Forgot Password
          </Link>
        </div>
        <div className="my-3 form-group">
          <Link className="w-100 btn btn-outline-primary d-block" to="/sign-up">
            I don't have an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
