// Style
import { Card } from "antd";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// App
const ShowImgs = ({ dataToDeploy }) => {
  const deployImages = (data) => {
    const photos = data.photos.map((results) => {
      return (
        <Card
          key={results.id}
          style={{
            width: 350,
            height: 300,
          }}
          cover={
            <img
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
            <FaHeart className="card-heart" />
          ) : (
            <FaRegHeart className="card-heart" />
          )}
        </Card>
      );
    });
    return photos;
  };

  return <div className="card-content-container">{deployImages(dataToDeploy)}</div>;
};

export default ShowImgs;

//photos[0].src.original
