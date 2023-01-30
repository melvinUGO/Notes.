import React from "react";
import { Link } from "react-router-dom";
import { FaArchive, FaTrash, FaSignOutAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className=" max-w-[100px] sm:max-w-[200px] border p-2 pt-10">
      <Link
        to="/create-note"
        className="flex flex-col sm:flex-row gap-2 items-center py-3 mb-2"
      >
        <MdCreateNewFolder />
        <span className=" text-[0.8rem] sm:text-[1rem] font-semibold">
          New Note
        </span>
      </Link>

      <Link
        to="/archive"
        className=" flex flex-col sm:flex-row gap-2 items-center p-3 mb-2"
      >
        <FaArchive /> <span>Archive</span>
      </Link>
      <Link
        to="/trash"
        className="flex flex-col sm:flex-row gap-2 items-center p-3 mb-2"
      >
        <FaTrash /> <span>Trash</span>
      </Link>
      <Link
        to="/settings"
        className="flex flex-col sm:flex-row gap-2 items-center p-3"
      >
        <AiFillSetting /> <span>Settings</span>
      </Link>
      <Link
        to="/signout"
        className="flex flex-col sm:flex-row gap-2 items-center p-3 absolute bottom-0 left-0"
      >
        <FaSignOutAlt /> Sign Out
      </Link>
    </div>
  );
};

export default Sidebar;
