import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createAccountService } from "./signupService";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="shadow w-25 text-center mx-auto my-5 p-3">
      <form
        onSubmit={handleSubmit((data) => {
          createAccountService(data);
        })}
      >
        <h2 className="text-primary fw-bold">Sign Up</h2>
        <div className="my-3 form-group">
          <input
            {...register("username", {
              required: { value: true, message: "username is required" },
              minLength: {
                value: 3,
                message: "Minimum add 3 char's to create username",
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Username can only contain letters (a-z, A-Z)",
              },
            })}
            className="w-100 form-control"
            type="text"
            placeholder="username"
          />
          <p style={{ color: "red", textAlign: "left" }}>
            {errors.username && "*" + errors.username.message}
          </p>
        </div>
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
              pattern: {
                value:
                  /^(?=[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z0-9_@$]{8,}$/,
                message:
                  "Password must be at least 8 characters with one uppercase, one lowercase, one number, and optional special characters (_@$). Cannot start with special character.",
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
            value="Sign Up"
          />
        </div>
        <div className="my-3 form-group">
          <Link to="/sign-in">
            <input
              className="w-100 btn btn-outline-primary"
              type="button"
              value="I already have an account"
            />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
