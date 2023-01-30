import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Context";
import { FcFolder } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {
  const navigate = useNavigate();
  const { user, baseUrl } = useGlobalContext();
  const [notes, setNotes] = useState([]);
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        isLoading(true);
        const response = await fetch(baseUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        console.log(data);
        if (data?.notes.length === 0) {
          setNotes("");
        } else {
          setNotes(data);
        }
        isLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!notes) {
    return (
      <div className="p-5 flex">
        <Link to="/create-note" className="text-lg">
          Create new note 🖋️
        </Link>
      </div>
    );
  }

  return (
    <div className=" p-5 md:flex items-start flex-wrap overflow-y-auto pb-16">
      {notes?.notes?.map((item) => {
        const { folder, note, _id, createdAt } = item;
        return (
          <div
            key={_id}
            onClick={() => navigate(`/note/${_id}`)}
            className="text-center p-3 dark:text-black   w-30 md:w-48"
          >
            <div className="bg-white  p-3 shadow-md hover:shadow-lg hover:rotate-2 overflow-hidden  rounded-md">
              <h3 className="p-3 pb-10 flex items-center">
                <FcFolder />: {folder}
              </h3>
              <p className=" break-words">
                {" "}
                {note.length > 15 ? `${note.substring(0, 15)}...` : note}
              </p>
            </div>
            <small className="text-center dark:text-gray-200 font-semibold">
              {createdAt.split("T")[0]}
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
