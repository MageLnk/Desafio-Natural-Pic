import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
//import apiCall from "../../api/apiCall";
import dummyData from "../../dummyData/fotos.json";

const GeneralContextProvider = ({ children }) => {
  //const exampleUseApiCall = async (userId) => {
  //  try {
  //    const data = await apiCall({ url: `http://insertApiAddress` });
  //    // Insert setData(data)
  //  } catch (e) {
  //    alert("Un error ha ocurrido. Por favor actualice la página");
  //  }
  //};

  return <GeneralContext.Provider value={{ dummyData }}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
