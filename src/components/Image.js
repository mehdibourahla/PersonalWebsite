import React from "react";
import svgRect from "../assets/svg/rectangle.svg";

const Image = ({ src, alt, className, onClick, hasBorder }) => {
  let border = '';
  if(hasBorder)
  {
    border += 'border rounded-lg border-red'
    className+= ' transform translate-x-1 translate-y-1'
  }
  return (
      <div className="relative" className={border}>
          <img src={src} alt={alt}  className={className +" w-full"} />
      </div>
  );
};

export default Image;
