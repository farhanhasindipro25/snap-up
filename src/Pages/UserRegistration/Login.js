import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  useTitle("Login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const { signIn, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        // setLoggedUserEmail(data.email);
        toast.success("Logged in successfully!");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setGoogleUserEmail(user.email);
        // verifyGoogleSignIn(user.email);
        saveUserToDB(user.displayName, user.email);
        navigate("/task-board");
        toast.success("Logged in successfully!");
      })
      .catch((error) => console.error(error));
  };

  const saveUserToDB = (name, email) => {
    const user = { name, email };
    console.log(user);
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
        navigate("/");
      });
  };

  return (
    <div className="container mx-auto mt-28 mb-52 p-10 rounded-xl">
      <div className="pb-14">
        <h2 className="text-center font-medium text-3xl">
          Welcome back to{" "}
          <span className="font-semibold underline">Snap Up</span>
        </h2>
        <p className="text-center text-lg mt-3 font-medium">
          Please login to your account!
        </p>
      </div>
      <form
        className="flex flex-col gap- lg:w-1/2 mx-auto"
        onSubmit={handleSubmit(handleLogin)}
      >
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
            <p className="text-red-600 text-sm ml-1 mt-3" role="alert">
              {errors.email?.message}
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
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm ml-1 mt-3" role="alert">
              {errors.password?.message}
            </p>
          )}
        </div>
        <Button type="submit" color="dark">
          LOGIN
        </Button>
        {loginError === "Firebase: Error (auth/user-not-found)." && (
          <p className="text-red-600 text-center mt-4">
            Invalid Email. User not found!
          </p>
        )}
        {loginError === "Firebase: Error (auth/wrong-password)." && (
          <p className="text-red-600 text-center mt-4">Wrong Password</p>
        )}
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-medium">
            Sign Up
          </Link>
        </p>
        <div className="mt-8 flex items-center gap-3">
          <hr className="w-1/2" />
          <p className="text-sm font-medium">OR</p>
          <hr className="w-1/2" />
        </div>
        <div>
          <Button
            color="light"
            className="w-full mt-4"
            onClick={handleGoogleSignIn}
          >
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
