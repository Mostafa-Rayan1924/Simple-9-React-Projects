import { useState } from "react";

const Colors = () => {
  let random;
  let [color, setColor] = useState("rgb(0,0,0)");
  function randomColor() {
    return (random = Math.floor(Math.random() * 255));
  }
  function randomColorGen() {
    setColor(`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
  }
  return (
    <div
      style={{ background: `${color}` }}
      className="h-screen  text-white flex items-center justify-center">
      <button
        onClick={randomColorGen}
        className="bg-sky-500 rounded-lg px-6 py-2 mr-2">
        Flip color
      </button>
      <span>
        : <span className="select-all text-2xl">{color}</span>
      </span>
    </div>
  );
  //   by hex
  //   let random = "ABCDEFabcdef123456789";
  //   let [col, setCol] = useState("");
  //   function genRan() {
  //     let elementColor = "#";
  //     let randomArr = random.split("");
  //     for (let i = 0; i < 6; i++) {
  //       elementColor += randomArr[Math.floor(Math.random() * randomArr.length)];
  //       setCol(elementColor);
  //     }
  //   }
  //   return (
  //     <div
  //       style={{ background: `${col}` }}
  //       className="h-screen    text-black flex items-center justify-center">
  //       <button onClick={genRan} className="bg-sky-500 rounded-lg px-6 py-2 mr-2">
  //         Flip color
  //       </button>
  //       <span>
  //         : <span className="select-all text-2xl">{col}</span>
  //       </span>
  //     </div>
  //   );
};

export default Colors;
