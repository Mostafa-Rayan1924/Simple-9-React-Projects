import React, { useState } from "react";

const SliderBox = ({ item }) => {
  let [Num, setNum] = useState(0);
  function handleAdd() {
    if (Num >= item.length - 1) {
      setNum(0);
    } else {
      setNum(Num + 1);
    }
  }
  function handlemin() {
    if (Num <= 0) {
      setNum(item.length - 1);
    } else {
      setNum(Num - 1);
    }
  }
  function handleRandom() {
    let random = Math.floor(Math.random() * item.length);
    setNum(random);
  }
  return (
    <div
      key={item.id}
      className="max-w-[600px] mx-auto text-center rounded bg-white shadow-lg p-4">
      <img
        className="w-[120px] h-[120px] object-cover rounded-full mx-auto border-r-4 border-sky-600"
        src={item[Num].image}
      />
      <h2>{item[Num].name}</h2>
      <h2 className="text-sky-500 ">{item[Num].job}</h2>
      <p className="text-gray-400 my-4">{item[Num].text}</p>
      <div className="flex gap-3 justify-center cursor-pointer">
        <span onClick={handlemin} className="text-2xl">
          L
        </span>
        <span onClick={handleAdd} className="text-2xl">
          R
        </span>
      </div>
      <button
        onClick={handleRandom}
        className="p-1 my-2 rounded bg-sky-500 text-white">
        random
      </button>
    </div>
  );
};

export default SliderBox;
