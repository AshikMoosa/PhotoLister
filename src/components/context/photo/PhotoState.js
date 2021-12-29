import React, { useReducer } from "react";
import PhotoReducer from "./photoReducer";
import PhotoContext from "./photoContext";
import { GET_PHOTOS } from "../types";

const PhotoState = (props) => {
  const initialState = {
    photos: [],
  };

  const [state, dispatch] = useReducer(PhotoReducer, initialState);

  //Get all photos
  const getPhotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        dispatch({
          type: GET_PHOTOS,
          payload: data,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <PhotoContext.Provider
      value={{
        photos: state.photos,
        getPhotos,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoState;
