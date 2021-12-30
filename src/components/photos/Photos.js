import React, { useEffect, useState, useContext } from "react";
import PhotoItem from "./PhotoItem";
import PhotoContext from "../context/photo/photoContext";
import InfiniteScroll from "react-infinite-scroll-component";

const Photos = () => {
  const photoContext = useContext(PhotoContext);
  const { photos, getPhotos } = photoContext;
  const [count, setCount] = useState(1);

  //Initial App load - Fetch data
  useEffect(() => {
    getPhotos(count);
    setCount(count + 1);
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = () => {
    getPhotos(count);
    setCount(count + 1);
  };

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={photos.length}
        next={photos !== null && fetchMoreData}
        hasMore={true}
      >
        <div className="photo-grid">
          {photos &&
            photos.map((photo) => {
              return <PhotoItem key={photo.id} photoData={photo} />;
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Photos;
