import { useContext } from "react";
import { useState } from "react";
import { authcontext } from "./Auth";

const Form = () => {
  let { auth, setAuth } = useContext(authcontext);
  let [form, setForm] = useState({
    name: "",
    password: "",
  });
  let handleLogin = (e) => {
    e.preventDefault();
    let token = "123456";
    localStorage.setItem("name", form.name);
    localStorage.setItem("token", token);
    setAuth({
      name: form.name,
      token: token,
    });
  };
  return (
    <div className="my-5 w-[80%] mx-auto">
      <p>name:</p>
      <input
        value={form.name}
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }}
        className="bg-gray-200 w-[400px] rounded-lg h-10"
        type="text"
      />
      <p>password:</p>
      <input
        value={form.password}
        onChange={(e) => {
          setForm({ ...form, password: e.target.value });
        }}
        className="bg-gray-200 w-[400px] rounded-lg h-10 block "
        type="text"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 p-2 mt-4  text-white rounded-lg">
        login
      </button>
    </div>
  );
};

export default Form;
