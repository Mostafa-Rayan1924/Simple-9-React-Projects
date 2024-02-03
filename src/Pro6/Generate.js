import { useState } from "react";
import data from "./data";
const Generate = () => {
  let [par, setP] = useState([]);
  let [inp, setInp] = useState(0);
  function handleGen() {
    if (inp > 0) {
      setP(data.slice(0, inp));
      //   console.log(p);
    }
  }
  return (
    <div className="h-screen  text-center py-[200px]">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          <p>paragraphs:</p>
          <div className="flex justify-center">
            <input
              value={inp}
              onChange={(e) => {
                setInp(+e.target.value);
              }}
              className="p-2 rounded-lg border"
              type="number"
            />
            <button
              onClick={handleGen}
              className="p-2 bg-sky-500 rounded-lg text-white ml-2">
              generate
            </button>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-[400px] my-10">
            {par.map((item, index) => {
              return (
                <p className="my-10" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
