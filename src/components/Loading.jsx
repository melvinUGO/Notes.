import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <MagnifyingGlass />
    </div>
  );
};

export default Loading;
