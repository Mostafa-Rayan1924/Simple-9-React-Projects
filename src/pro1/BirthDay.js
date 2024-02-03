import { useState } from "react";
import data from "./Data";
import List from "./List";
const BirthDay = () => {
  let [people, setPeople] = useState(data);
  let mapPeople = people.map((item) => {
    return <List people={item} />;
  });
  console.log(people);
  return (
    <div className="h-screen bg-pink-400 ">
      <div className="container py-[100px]">
        <div className="bg-white rounded-lg p-6 w-[300px]  md:w-[600px] mx-auto">
          <h2 className="font-bold mb-4">{people.length} BirthDay Reminder </h2>

          {mapPeople}
          <button
            onClick={() => setPeople([])}
            className="w-full p-3 bg-pink-400 text-white rounded">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthDay;
