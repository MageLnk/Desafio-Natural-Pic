import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import ShowImgs from "../ShowImgs";
// App
const HomeContent = () => {
  const { dummyData } = useContext(GeneralContext);
  return (
    <div className="home-content-container">
      <h1 className="home-content-title">Natual Pic</h1>
      <ShowImgs dataToDeploy={dummyData} />
    </div>
  );
};

export default HomeContent;
