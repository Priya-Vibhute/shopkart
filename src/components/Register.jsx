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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name:</label>
      <input
        type="text"
        {...register("firstName", {
          required: { value: true, message: "firstname is required" },
        })}
      />
      <br />
      <br /> <label>Last Name:</label>
      <input
        type="text"
        {...register("lastName", {
          required: { value: true, message: "lastname is required" },
        })}
      />
      <br />
      <br />
      <label>Email:</label>
      <input
        type="email"
        {...register("email", {
          required: { value: true, message: "email is required" },
        })}
      />{" "}
      <br />
      <br />
      <label>Password:</label>
      <input type="password" name="password" /> <br />
      <br />
      <label>Confirm Password:</label>
      <input type="password" name="confirmpassword" /> <br />
      <br />
      <input type="submit" value="Register" />
    </form>
  );
}

export default Register;
