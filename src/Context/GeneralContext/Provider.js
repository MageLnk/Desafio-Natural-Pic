import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [test, setTest] = useState(true);

  const exampleUseApiCall = async (userId) => {
    try {
      const data = await apiCall({ url: `http://insertApiAddress` });
      // Insert setData(data)
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  const guitarra = {
    brand: "Fender",
    model: "Stratocaster",
    year: "2016",
    price: "1000000",
    strings: 6,
  };

  const example = (text) => {
    return new Map(Object.entries(guitarra));
  };

  useEffect(() => {
    console.log(example());
    //console.log(
    //  "Una buen ejemplo para traer data desde una Api al momento de cargar la app, es usar el useEffect acá"
    //);
  }, []);

  return <GeneralContext.Provider value={{ test, setTest }}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
