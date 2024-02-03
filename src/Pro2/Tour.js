import { useState } from "react";

const Tour = ({ tour, handleDel, getAllCountries }) => {
  let [readMore, setReadMore] = useState(false);
  if (tour.length == 0) {
    return (
      <div className="bg-white text-center py-10">
        <h2>No country are here</h2>
        <button
          className="p-3 my-2 rounded bg-sky-500 text-white"
          onClick={() => {
            getAllCountries();
          }}>
          Refresh
        </button>
      </div>
    );
  }
  let tourMap = tour.map((item) => {
    return (
      <div key={item.id} className="shadow bg-white mt-10">
        <img className="max-w-full h-[300px] w-full " src={item.image} />
        <div className="p-4  flex justify-between">
          <h2>{item.name}</h2>
          <h3 className="text-blue-500">{item.price}</h3>
        </div>
        <div className="p-4">
          <p className="mb-5 text-gray-500">
            {readMore ? item.info : `${item.info.slice(0, 200)}...`}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
              className="text-sky-500 ml-2">
              {readMore ? "showless" : "readMore"}
            </button>
          </p>
          <button
            onClick={() => {
              handleDel(item.id);
            }}
            className="border border-red-500 text-red-500 px-6 rounded py-2 w-fit block mx-auto">
            delete
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2 className="text-center text-3xl text-white pt-20 font-bold ">
        Our Tours
      </h2>
      <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 ">
        {tourMap}
      </div>
    </>
  );
};

export default Tour;
