import React from "react";

const Video = ({ src }) => {
  return (
    <div className='h-80 md:w-96 md:h-48 border border-red rounded-lg'>
      <iframe
        className='w-full h-full rounded-lg'
        src={src}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
