import React from "react";
import "./Background.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import vd1 from "../../assets/vd1.mp4";
import { useLocation } from "react-router-dom";

function Background({ playStaus, heroCount }) {
  const location = useLocation();
  const opacity = () => {
    if (location.pathname === "/") {
      return 1; // Full opacity on the home page
    } else if (location.pathname.includes("explorer")) {
      return 0.6;
    }
  };
  return (
    <video
      className="background"
      autoPlay
      loop
      muted
      style={{ opacity: opacity() }}
    >
      <source src={vd1} type="video/mp4" />
    </video>
  );
}

export default Background;
