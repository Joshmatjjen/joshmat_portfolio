// src/components/GlowingImage.tsx

import React from "react";
import "./GlowingImage.scss";
import profileImage from "./assets/img/profile_image.png";
import profileImageBW from "./assets/img/profile_image_bw.png";

const GlowingImage: React.FC = () => {
  const mode = localStorage.getItem("mode");
  return (
    <div className="glow-container">
      <img
        src={mode === "light" ? profileImageBW : profileImage}
        alt="Glowing Portrait"
        className="glow-image"
      />
    </div>
  );
};

export default GlowingImage;
