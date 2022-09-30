import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import ShowImgs from "../ShowImgs";
// App
const FavoriteContent = () => {
  const { data } = useContext(GeneralContext);

  const searchFavorites = () => {
    if (!data) {
      return;
    }
    const findFavorites = data.filter((e) => {
      if (e.liked === true) {
        return e;
      }
    });
    return findFavorites;
  };
  return (
    <div className="home-content-container">
      <h1 className="home-content-title">Natual Pic</h1>
      <ShowImgs dataToDeploy={searchFavorites()} />
    </div>
  );
};

export default FavoriteContent;
