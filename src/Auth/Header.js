import { useContext } from "react";
import { authcontext } from "./Auth";
const Header = () => {
  let { auth, setAuth } = useContext(authcontext);
  function handlLogoout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setAuth({});
  }
  return (
    <div className="flex items-center justify-around py-5">
      <h1>header</h1>
      {auth.name ? (
        <div className="flex items-center">
          <p>{auth.name}</p>
          <button
            onClick={handlLogoout}
            className="bg-red-500 p-2  text-white rounded-lg">
            logout
          </button>
        </div>
      ) : (
        <span className="bg-blue-500 p-2  text-white rounded-lg">
          you need to login
        </span>
      )}
    </div>
  );
};

export default Header;
