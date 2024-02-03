import { Link } from "react-router-dom";

const BoxRender = ({ item }) => {
  console.log(item);
  return (
    <Link to={`${item.url}`}>
      <div className="shadow-lg p-5 text-center bg-slate-50">
        <h2>{item.title}</h2>
      </div>
    </Link>
  );
};

export default BoxRender;
