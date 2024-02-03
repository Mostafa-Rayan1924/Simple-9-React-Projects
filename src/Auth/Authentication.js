import { useContext } from "react";
import Form from "./Form";
import Header from "./Header";
import { authcontext } from "./Auth";

const Authentication = () => {
  let { auth, setAuth } = useContext(authcontext);

  return (
    <div>
      <Header />
      {auth.name ? `welcome ${auth.name}` : <Form />}
    </div>
  );
};

export default Authentication;
