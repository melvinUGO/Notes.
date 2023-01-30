import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);
  const navigate = useNavigate();

  // REGISTER USER
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setRegistering(true);
      const response = await axios.post(
        `https://note-api-sxhg.onrender.com/api/v1/auth/register`,
        {
          name,
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
      console.log(response.status);
      if (data || response.status == 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center">
      <div className=" w-[80%] sm:w-[50%] lg:w-[30%] mt-24 p-10 text-center hover:bg-yellow-400 hover:border-2 hover:border-r-8 hover:border-b-8 border-black rounded-2xl s">
        <h1 className=" font-bold text-3xl py-10">Get Started</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Enter Name"
            className=" outline-none mb-3 p-3 border-2 rounded-lg border-black hover:border-2 hover:border-r-4 hover:border-b-4"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
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
              {registering ? "O" : "Sign Up"}
            </button>
          </div>
          <p className="py-3">
            Already have an account?{" "}
            <span>
              <Link to="/login" className=" text-blue-700 font-bold">
                <em>Log In</em>
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
