import React, { createContext, useContext } from "react";

const NoteContext = createContext();
const baseUrl = "https://note-api-sxhg.onrender.com/api/v1/note";

const Context = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <NoteContext.Provider value={{ baseUrl, user }}>
      {children}
    </NoteContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(NoteContext);
};

export { useGlobalContext, Context };
