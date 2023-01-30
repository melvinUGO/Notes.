import axios from "axios";
import React, { useState } from "react";
import { FcFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const CreateNote = () => {
  const [folderName, setFolderName] = useState("");
  const [newNote, setnewNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const { user, baseUrl } = useGlobalContext();

  // CREATE NEW NOTE
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      await axios.post(
        baseUrl,
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
  return (
    <div className="h-full px-2 py-5 sm:p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-evenly sm:justify-between items-center  sm:flex-row">
          <div className="flex items-center p-2 gap-1">
            <FcFolder className="text-2xl" />
            <input
              className="bg-gray-50 w-[80%] p-2 rounded-md dark:text-black"
              type="text"
              value={folderName}
              placeholder="Name of Folder"
              required
              onChange={(e) => setFolderName(e.target.value)}
            />
          </div>
          <button
            className=" bg-slate-400 p-2 rounded-lg dark:text-black"
            type="submit"
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
        <div className=" h-full mt-5">
          <textarea
            className="w-full h-full p-3 text-[1.2rem] bg-transparent font-sans outline-none"
            name="note"
            id="note"
            cols="30"
            rows="10"
            value={newNote}
            placeholder="Add Text Here..."
            onChange={(e) => {
              setnewNote(e.target.value);
            }}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
