import { useState } from "react";
import reviews from "./data";
import SliderBox from "./SliderBox";
const Slider = () => {
  let [people, setPeople] = useState(reviews);

  return (
    <div className="h-screen py-[100px]  text-center bg-sky-100">
      <h1 className="text-4xl text-sky-500 mb-10">
        Our Reviews -{people.length}-
      </h1>
      <div className="container">
        <SliderBox item={people} />
      </div>
    </div>
  );
};

export default Slider;
