import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Style
import { Card, Image } from "antd";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// App
const ShowImgs = ({ dataToDeploy }) => {
  const { handleLike } = useContext(GeneralContext);
  const deployImages = (data) => {
    if (!data) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    }
    const photos = data.map((results) => {
      return (
        <Card
          key={results.id}
          style={{
            width: 350,
            height: 300,
          }}
          cover={
            <Image
              style={{
                width: 350,
                height: 300,
              }}
              alt={results.alt}
              src={results.src.original}
            />
          }
        >
          {results.liked === true ? (
            <FaHeart className="card-heart" onClick={() => handleLike(results.id)} />
          ) : (
            <FaRegHeart className="card-heart" onClick={() => handleLike(results.id)} />
          )}
        </Card>
      );
    });
    return photos;
  };

  return <div className="card-content-container">{deployImages(dataToDeploy)}</div>;
};

export default ShowImgs;
