import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CreateNote from "./CreateNote";
import Note from "./Note";
import AllNotes from "./AllNotes";

const NotesComp = () => {
  const location = useLocation();
  const { id } = useParams();

  switch (location.pathname) {
    case "/":
      return <AllNotes />;
      break;
    case "/create-note":
      return <CreateNote />;
      break;
    case `/note/${id}`:
      return <Note />;
      break;
  }
};

export default NotesComp;
