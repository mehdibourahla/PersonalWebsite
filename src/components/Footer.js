import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className='relative bg-black text-white'>
      <div className='flex flex-col items-center text-center py-16'>
        <h1 className='text-4xl font-bold'>Follow me on Social Media!</h1>
        <div className='flex justify-center items-center h-48 space-x-32'>
          <a href='https://www.youtube.com/channel/UCmj1p0fQNivPBc-eZNxmNMQ'>
            <i className='fab fa-youtube fa-3x hover:text-red'></i>
          </a>
          <a href='https://twitter.com/MehdiBourahla'>
            <i className='fab fa-twitter fa-3x hover:text-blue-600'></i>
          </a>
          <a href='https://www.instagram.com/newbiesoft/'>
            <i className='fab fa-instagram fa-3x hover:text-red'></i>
          </a>
          <a href='https://www.linkedin.com/in/mehdibourahla/'>
            <i className='fab fa-linkedin fa-3x hover:text-blue-600'></i>
          </a>
        </div>
        <Button
          text='Get In Touch!'
          className='hover:text-4xl p-4 text-3xl text-red border border-red rounded-lg'
        ></Button>
      </div>
      <div className="absolute w-full text-center bottom-0 pb-2">
        <p>Designed and Developed by Mehdi Bourahla.</p>
      </div>
    </div>
  );
};

export default Footer;
