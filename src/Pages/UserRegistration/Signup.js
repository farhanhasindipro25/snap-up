import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Signup = () => {
  useTitle("Sign Up");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const saveUserToDB = (name, email) => {
    const user = { name, email };
    fetch("https://snap-up-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Saving user...", data);
        setCreatedUserEmail(email);
      });
  };

  const handleSignup = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/task-board");
        toast.success("User account created successfully!");
        const userInfo = {
          displayName: data.name,
        };
        console.log(userInfo);
        updateUser(userInfo)
          .then(() => {
            saveUserToDB(data.name, data.email);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div className="container mx-auto mt-28 mb-52 p-10 rounded-xl">
      <div className="pb-14">
        <h2 className="text-center font-medium text-3xl">
          You need to sign up to{" "}
          <span className="font-semibold underline">get started.</span>
        </h2>
        <p className="text-center text-lg mt-3 font-medium">
          Create an account now!
        </p>
      </div>
      <form
        className="flex flex-col gap- lg:w-1/2 mx-auto"
        onSubmit={handleSubmit(handleSignup)}
      >
        <div className="mb-4">
          <div className="mb-2">
            <Label htmlFor="name" value="Your Full Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter Full Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600 ml-1 mt-3 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@gmail.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-600 ml-1 mt-3 text-sm" role="alert">
              {errors.email?.message}
            </p>
          )}
          {signUpError === "Firebase: Error (auth/email-already-in-use)." && (
            <p className="text-red-600 text-center mt-4 text-sm">
              This email is already in use.
            </p>
          )}
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be alteast 6 characters longer!",
              },
              pattern: {
                value:
                  /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/,
                message:
                  "Your password must have at least 2 capital letters, 2 small letters, 2 digits, and 1 special character!",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 ml-1 mt-3 text-sm" role="alert">
              {errors.password?.message}
            </p>
          )}
          <div className="mt-6 py-3 rounded-lg bg-slate-100">
            <h2 className="text-xs text-center font-semibold">
              Password Criteria
            </h2>
            <ul className="my-4">
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule1"
                  className="radio ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs">Must have two capital letters</p>
              </li>
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule2"
                  className="radio ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs">Must have two small letters</p>
              </li>
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule3"
                  className="radio ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs">Must have two digits</p>
              </li>
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule4"
                  className="radio ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs">Must have one special character</p>
              </li>
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule5"
                  className="radio ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs">Must be of at least 6 in length</p>
              </li>
            </ul>
          </div>
        </div>
        {signUpError === "Firebase: Error (auth/user-not-found)." && (
          <p className="text-red-600 text-center mt-4 text-sm">
            Invalid Email. User not found!
          </p>
        )}
        {signUpError === "Firebase: Error (auth/wrong-password)." && (
          <p className="text-red-600 text-center mt-4 text-sm">
            Wrong Password
          </p>
        )}
        <Button type="submit" color="dark">
          SIGN UP
        </Button>
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
