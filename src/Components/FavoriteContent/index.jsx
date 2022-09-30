import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import ShowImgs from "../ShowImgs";
// App
const FavoriteContent = () => {
  const { data } = useContext(GeneralContext);
  return (
    <div className="home-content-container">
      <h1 className="home-content-title">Natual Pic</h1>
      <ShowImgs dataToDeploy={data} />
    </div>
  );
};

export default FavoriteContent;
