import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import NotesComp from "../components/NotesComp";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, []);

  return (
    <div className={`${darkTheme ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen h-[100vh] overflow-y-hidden">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <div className="grid grid-cols-custom_small sm:grid-cols-custom_large h-full">
          <Sidebar />
          <NotesComp />
        </div>
      </div>
    </div>
  );
};

export default Home;
