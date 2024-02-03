const Toast = ({ show = false, title, type }) => {
  if (show) {
    return (
      <div className="fixed bottom-0 left-5 ">
        <h2
          className={`${
            type == "error" ? "bg-red-500" : "bg-green-500"
          } text-white px-6 py-2 m-5 rounded-lg`}>
          {title}
        </h2>
      </div>
    );
  }
};

export default Toast;
