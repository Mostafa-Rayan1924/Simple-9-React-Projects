const Popup = ({ showModal = true, error = false }) => {
  if (showModal) {
    return (
      <div className="absolute h-[200px] w-full flex items-center justify-center z-10 bg-blue-500">
        <h1 className="w-[80%] bg-white h-20 flex items-center justify-center rounded-lg text-3xl">
          <span className={`${error ? "text-red-500" : "text-green-500"}`}>
            {error ? error : "the form has been submit"}
          </span>
        </h1>
      </div>
    );
  }
};

export default Popup;
