import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);
  const navigate = useNavigate();

  // LOGIN USER
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setRegistering(true);
      const response = await axios.post(
        `https://note-api-sxhg.onrender.com/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      const data = await response.data;
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ name: data.user, token: data.token })
      );
      setRegistering(false);
      console.log(data);
      if (data) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center">
      <div className=" w-[80%] sm:w-[50%] lg:w-[30%] mt-24 p-10 text-center hover:bg-yellow-400 hover:border-2 hover:border-r-8 hover:border-b-8 border-black rounded-2xl s">
        <h1 className=" font-bold text-3xl py-10">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Enter Email"
            className="outline-none mb-3 p-3 border-2 rounded-lg border-black hover:border-2 hover:border-r-4 hover:border-b-4"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="outline-none mb-3 p-3 border-2 rounded-lg border-black hover:border-2 hover:border-r-4 hover:border-b-4"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className=" text-right">
            <button
              type="submit"
              className=" bg-yellow-600 hover:bg-yellow-400 hover:text-black font-semibold text-white w-20 rounded-lg p-2 border-black hover:border-2 hover:border-r-4 hover:border-b-4"
            >
              {registering ? "O" : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
