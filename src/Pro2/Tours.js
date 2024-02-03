import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import axios from "axios";
const Tours = () => {
  let [Loader, SetLoader] = useState(true);
  let [country, SetCountry] = useState([]);
  function handleDel(id) {
    let filteredByDelete = country.filter((item) => {
      return item.id !== id;
    });
    SetCountry(filteredByDelete);
  }
  let getAllCountries = () => {
    axios
      .get("https://course-api.com/react-tours-project")
      .then(function (response) {
        // handle success
        SetCountry(response.data);
        SetLoader(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        SetLoader(false);
      });
  };
  useEffect(() => {
    getAllCountries();
  }, []);
  //   loading function
  if (Loader) {
    return <Loading />;
  }

  return (
    <div className="bg-sky-200">
      <Tour
        tour={country}
        handleDel={handleDel}
        getAllCountries={getAllCountries}
      />
    </div>
  );
};

export default Tours;
