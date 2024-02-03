import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let authcontext = createContext();

const AuthContextFunction = ({ children }) => {
  let [auth, setAuth] = useState({});
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuth({
        name: localStorage.getItem("name"),
        token: token,
      });
    }
  }, []);
  return (
    <authcontext.Provider value={{ auth, setAuth }}>
      {children}
    </authcontext.Provider>
  );
};

export default AuthContextFunction;
