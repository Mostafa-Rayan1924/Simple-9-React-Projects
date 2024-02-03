import { useContext, useState } from "react";
import { contextOfSideBar } from "../Contexts/Global";

const Tools = () => {
  let mo = useContext(contextOfSideBar);
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => {
          mo.setSide(true);
        }}
        className="text-blue-500 text-7xl p-10 fixed top-4 left-10">
        =
      </button>
    </div>
  );
};

export default Tools;
