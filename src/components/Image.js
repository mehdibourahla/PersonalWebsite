import React from "react";
import svgRect from "../assets/svg/rectangle.svg";

const Image = ({ src, alt, className, onClick }) => {
  return (
      <div className="relative" className="border border-red rounded-lg">
          <img src={src} alt={alt}  className="w-full transform translate-x-2 translate-y-2" />
      </div>
  );
};

export default Image;
