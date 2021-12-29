import { GET_PHOTOS } from "../types";

const photoReducer = (state, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
