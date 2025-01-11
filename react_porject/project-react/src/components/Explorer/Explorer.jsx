import React from "react";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import Gallery from "../PixabayGallery/Gallery";
import Background from "../Background/Background";

function Explorer() {
  const location = useLocation();
  const query = location.state?.query || "";
  return (
    <div>
      <NavBar />

      <Background />

      <Gallery query={query} />
    </div>
  );
}

export default Explorer;
