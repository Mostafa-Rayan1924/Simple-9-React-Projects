import BoxRender from "./BoxRender.jsx";
import data from "./dataBoxes.js";
const Hello = () => {
  let dataMaping = data.map((item) => {
    return <BoxRender key={item.id} item={item} />;
  });
  return (
    <div>
      <div className="bg-slate-900 h-[200px] flex items-center justify-center text-2xl md:text-5xl text-white">
        Simple React Projects
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2  gap-5 py-20">
        {dataMaping}
      </div>
    </div>
  );
};

export default Hello;
