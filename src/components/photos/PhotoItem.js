import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PhotoItem = (photoData) => {
  return (
    <div className="card">
      <LazyLoadImage
        src={photoData.photoData.url}
        alt="Avatar"
        effect="blur"
        style={{ width: "100%", cursor: "pointer" }}
      />
      <h3
        style={{
          color: "#003699",
          cursor: "pointer",
        }}
      >
        {photoData.photoData.id + ". " + photoData.photoData.title}
      </h3>
    </div>
  );
};

export default PhotoItem;
