import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Home, Login } from "./pages";
import AllNotes from "./components/AllNotes";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route exact path="/" element={<AllNotes />} />
            <Route exact path="/note/:id" element={<Note />} />
            <Route exact path="/create-note" element={<CreateNote />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
