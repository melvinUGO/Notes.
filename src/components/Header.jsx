import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="flex justify-between px-5 py-5 border shadow-md">
      <div>
        <Link to="/" className=" text-2xl font-mono">
          Notes.
        </Link>
      </div>
      <div>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className=" dark:bg-gray-50 bg-slate-400 p-2 rounded-md text-black"
        >
          {darkTheme ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
