import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mx-auto mt-28 mb-52 p-10 rounded-xl">
      <div className="pb-14">
        <h2 className="text-center font-medium text-3xl">
          You need to sign up to <span className="font-semibold underline">get started.</span>
        </h2>
        <p className="text-center text-lg mt-3 font-medium">
            Create an account now!
        </p>
      </div>
      <form className="flex flex-col gap- lg:w-1/2 mx-auto">
        <div className="mb-4">
          <div className="mb-2">
            <Label htmlFor="name" value="Your Full Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter Full Name"
            required={true}
          />
        </div>
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
          SIGN UP
        </Button>
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
