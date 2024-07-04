import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { login } from "../apis";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true);
      try {
        const response = await login({ email: email, password: password});
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="w-1/3">
        <div className="text-center py-5 bg-blue-700 text-white rounded-t-xl text-2xl">
          Login
        </div>

        <div className="bg-white rounded-b-xl py-10 px-10">
          <div className="flex space-x-5 border-b-2 pb-3">
            <FaRegUserCircle className="text-3xl" />
            <input
              type="email"
              placeholder="Email/Username"
              className="w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex space-x-5 border-b-2 py-3">
            <MdLockOutline className="text-3xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="block w-full bg-blue-700 rounded-md text-white py-2 px-3 my-7 flex justify-center"
            onClick={handleLogin}
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <Link className="underline">Forgot password?</Link>
          <div>
            Don't have an account yet?{" "}
            <Link to="/register" className="underline">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
