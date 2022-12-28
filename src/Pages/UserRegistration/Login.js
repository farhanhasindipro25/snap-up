import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="container mx-auto mt-28 mb-52 p-10 rounded-xl">
      <div className="pb-14">
        <h2 className="text-center font-medium text-3xl">
          Welcome back to <span className="font-semibold underline">Snap Up</span>
        </h2>
        <p className="text-center text-lg mt-3 font-medium">
          Please login to your account!
        </p>
      </div>
      <form className="flex flex-col gap- lg:w-1/2 mx-auto">
        <div className="mb-4">
          <div className="mb-2">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@gmail.com"
            required={true}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Enter Password"
            required={true}
          />
        </div>
        <Button type="submit" color="dark">
          LOGIN
        </Button>
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-500 font-medium">
            Sign Up
          </Link>
        </p>
        <div className="mt-8 flex items-center gap-3">
          <hr className="w-1/2" />
          <p className="text-sm font-medium">OR</p>
          <hr className="w-1/2" />
        </div>
        <div>
          <Button color="light" className="w-full mt-4">
            <span className="pr-3">
              <FcGoogle></FcGoogle>
            </span>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
