import React, { useContext, useState } from "react";
import { contextOfSideBar } from "../Contexts/Global";
const Sidebar = () => {
  let usecontextOfSide = useContext(contextOfSideBar);
  return (
    <div
      className={`transition-all duration-300 h-screen relative z-50 w-[20%] bg-black text-white p-10 ${
        usecontextOfSide.side ? "translate-x-[0]" : "translate-x-[-100%]"
      } `}>
      <button
        onClick={() => {
          usecontextOfSide.setSide(false);
        }}
        className="text-5xl">
        X
      </button>
      <ul className="flex flex-col space-y-5">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
};

export default Sidebar;
