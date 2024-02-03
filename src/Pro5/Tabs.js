import React, { useState } from "react";
import menu from "./data";
const Tabs = () => {
  let [menus, setMenus] = useState(menu);
  let renderItem = menus;
  let filterShakes = menus.filter((item) => {
    return item.category == "shakes";
  });
  let filterLunch = menus.filter((item) => {
    return item.category == "lunch";
  });
  let filterBreak = menus.filter((item) => {
    return item.category == "breakfast";
  });

  let [active, setActive] = useState("all");
  let activeUi = "";
  function handleTabs(name) {
    setActive(name);
  }
  if (active == "shakes") {
    renderItem = filterShakes;
  } else if (active == "lunch") {
    renderItem = filterLunch;
  } else if (active == "breakfast") {
    renderItem = filterBreak;
  }
  return (
    <div className="py-[200px]">
      <h1 className="text-center text-4xl ">Our Menu</h1>
      <div className="flex gap-10 justify-center items-center capitalize my-10 cursor-pointer">
        <span
          onClick={() => {
            handleTabs("all");
          }}
          className={`text-orange-500 ${
            active == "all" ? "bg-slate-300 p-1" : ""
          } `}>
          all
        </span>
        <span
          onClick={() => {
            handleTabs("breakfast");
          }}
          className={`text-orange-500 ${
            active == "breakfast" ? "bg-slate-300 p-1" : ""
          } `}>
          breakfast
        </span>
        <span
          onClick={() => {
            handleTabs("lunch");
          }}
          className={`text-orange-500 ${
            active == "lunch" ? "bg-slate-300 p-1" : ""
          } `}>
          lunch
        </span>
        <span
          onClick={() => {
            handleTabs("shakes");
          }}
          className={`text-orange-500 ${
            active == "shakes" ? "bg-slate-300 p-1" : ""
          } `}>
          shakes
        </span>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {renderItem.map((item) => {
          return (
            <div key={item.id} className="flex flex-col md:flex-row gap-5 mb-4">
              <div className="bg-slate-800 border-4 border-orange-400 text-white mx-auto w-[200px] h-[100px] flex items-center justify-center">
                {item.category}
              </div>
              <div>
                <div className="flex items-center justify-between flex-1  ">
                  <h2>{item.price}</h2>
                  <h2>{item.title}</h2>
                </div>
                <div>
                  <p className="my-4 text-gray-400">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
