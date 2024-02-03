import Sidebar from "./Sidebar";
import Tools from "./Tools";
import { contextOfSideBar } from "../Contexts/Global";
import { useState } from "react";
const Parent = () => {
  let [side, setSide] = useState(false);
  return (
    <div>
      <contextOfSideBar.Provider value={{ side, setSide }}>
        <Sidebar />
        <Tools />
      </contextOfSideBar.Provider>
    </div>
  );
};

export default Parent;
