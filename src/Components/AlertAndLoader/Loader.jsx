// src/Loader.js
import Lottie from "lottie-react";
import animationData from "./loader-animation.json"; // Updated import path
import "./Loader.css"; // Import the updated CSS file

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loader">
      <div className="lottie-container">
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>
      <div className="loader-text">Loading....</div>
    </div>
  );
};

export default Loader;
