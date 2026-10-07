import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-3">
              <h3 className="mb-0">Create Account</h3>
              <p className="mb-0 mt-1">Register to get started</p>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* First Name */}
                <div className="mb-3">
                  <label className="form-label">First Name</label>

                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    placeholder="Enter first name"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First name is required",
                      },
                      minLength: {
                        value: 2,
                        message: "Minimum 2 characters are required",
                      },
                    })}
                  />

                  {errors.firstName && (
                    <div className="invalid-feedback">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <label className="form-label">Last Name</label>

                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    placeholder="Enter last name"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last name is required",
                      },
                      minLength: {
                        value: 2,
                        message: "Minimum 2 characters are required",
                      },
                    })}
                  />

                  {errors.lastName && (
                    <div className="invalid-feedback">
                      {errors.lastName.message}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>

                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter email address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>

                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Create a password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S{6,16}$/,
                        message:
                          "Password must be 6-16 characters with uppercase, lowercase, and a number. No spaces allowed.",
                      },
                    })}
                  />

                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>

                  <input
                    type="password"
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "Confirm password is required",
                      },
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />

                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100 py-2">
                  Register
                </button>
              </form>
            </div>

            <div className="card-footer text-center bg-light">
              Already have an account?{" "}
              <a href="/login" className="text-decoration-none">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
