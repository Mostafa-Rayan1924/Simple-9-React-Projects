import React from "react";

const List = ({ people }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <img
        className="w-[60px] h-[60px] object-cover rounded-full"
        src={people.image}
      />
      <div>
        <h3>{people.name}</h3>
        <h4 className="text-gray-400">{people.age}</h4>
      </div>
    </div>
  );
};

export default List;
