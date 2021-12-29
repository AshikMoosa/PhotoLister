import React from "react";
import Navbar from "./components/layout/Navbar";
import Photos from "./components/photos/Photos";
import PhotoState from "./components/context/photo/PhotoState";

function App() {
  return (
    <PhotoState>
      <>
        <Navbar />
        <Photos />
      </>
    </PhotoState>
  );
}

export default App;
