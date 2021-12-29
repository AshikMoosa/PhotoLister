import React, { useEffect, useContext } from "react";
import PhotoItem from "./PhotoItem";
import PhotoContext from "../context/photo/photoContext";

const Photos = () => {
  const photoContext = useContext(PhotoContext);
  const { photos, getPhotos } = photoContext;

  //Initial App load - Fetch data
  useEffect(() => {
    getPhotos();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <div className="photo-grid">
        {photos &&
          photos.map((photo) => {
            return <PhotoItem key={photo.id} photoData={photo} />;
          })}
      </div>
    </div>
  );
};

export default Photos;
