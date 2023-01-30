import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import { FcFolder } from "react-icons/fc";
import Loading from "./Loading";
import axios from "axios";

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [newNote, setnewNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { user, baseUrl } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    const getNote = async () => {
      console.log("fetch note");
      try {
        const response = await fetch(`${baseUrl}/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        if (data.note) {
          const { folder, note } = data.note;
          setFolderName(folder);
          setnewNote(note);
        }
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getNote();
  }, []);

  // delete note
  const deleteNote = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`${baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setIsDeleting(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // update note
  const updateNote = async () => {
    try {
      setIsSaving(true);
      await axios.patch(
        `${baseUrl}/${id}`,
        {
          folder: folderName,
          note: newNote,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setIsSaving(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-full px-1 py-5 sm:p-5">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
        <div className="flex items-center p-3 gap-1">
          <FcFolder className="text-2xl" />
          <input
            className="bg-gray-50 p-2 rounded-md dark:text-black"
            type="text"
            value={folderName}
            required
            onChange={(e) => setFolderName(e.target.value)}
          />
        </div>
        <div>
          <button
            className=" bg-gray-50 p-2 dark:text-black rounded-lg mx-2"
            type="button"
            onClick={() => deleteNote()}
          >
            {isDeleting ? "Deleting" : "Delete"}
          </button>
          <button
            className=" bg-gray-50 p-2 dark:text-black rounded-lg"
            type="button"
            onClick={() => updateNote()}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      <div className=" h-full mt-5">
        <textarea
          className="w-full h-full p-3 text-[1.2rem] bg-transparent font-sans outline-none"
          name="note"
          id="note"
          cols="30"
          rows="10"
          value={newNote}
          onChange={(e) => {
            setnewNote(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default Note;
