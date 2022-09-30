import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import dummyData from "../../dummyData/fotos.json";

const GeneralContextProvider = ({ children }) => {
  const [data, setData] = useState("");

  const handleLike = (id) => {
    const findPicture = data.find((Internaldata, i) => {
      let newData = data;
      if (id === Internaldata.id) {
        newData[i].liked = !newData[i].liked;
      }
      setData([...newData]);
    });
    // Cuál es la mejor manera de poner esto? Digo, para que el findPicture no quede "oscuro"
  };

  useEffect(() => {
    setData(dummyData.photos);
  }, []);

  return <GeneralContext.Provider value={{ data, handleLike }}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
