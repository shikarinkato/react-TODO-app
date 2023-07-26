import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import userContext from "../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(userContext);
  const { Login, isAuthenticated, loading } = context;

  const submitHandler = async (e) => {
    e.preventDefault();
    Login(email, password);
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div className=" flex justify-center items-center flex-col gap-y-4 bg-gradient-to-b from-violet-500 to-fuchsia-500 px-6 py-8 rounded-lg ">
        <h1 className="text-4xl font-semibold text-white">Log in</h1>
        <div className="flex justify-between items-center">
          <span></span>
          <span></span>
        </div>
        <form
          action=""
          className="flex flex-col gap-y-4"
          onSubmit={submitHandler}
        >
          <div className="flex justify-center items-center flex-col gap-y-4">
            <input
              type="email"
              placeholder="email"
              className="rounded-md pl-2 w-60 h-8 outline-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="rounded-md pl-2 w-60 h-8 outline-none"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button disabled={loading}
              type="submit"
              className=" mt-4 px-4 py-1 bg-white rounded-full text-violet-500 hover:shadow-lg"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center flex-col mt-8 gap-y-4">
        <h1 className="text-violet-500">or</h1>
        <Link to="/register">
          <button
            disabled={loading}
            className="px-4 py-1 bg-violet-500 rounded-full text-white hover:shadow-lg"
          >
            sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
