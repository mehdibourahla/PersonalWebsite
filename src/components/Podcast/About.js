import React from "react";
import Button from "../Button";
import Image from "../Image";
import aboutImg from "../../assets/img/newbiesoft.png";
const About = () => {
  return (
    <div className='bg-black py-16'>
      <div className='container px-4 md:px-32 lg:flex lg:justify-around '>
        <Image src={aboutImg} hasBorder={true} alt='Mehdi Bourahla'></Image>
        <div className='lg:w-1/2 py-5'>
          <p className='text-white text-4xl'>NEWBIESOFT</p>
          <p className='text-red'>Made by a newbie.</p>
          <p className='text-grey text-4xl'>I Love talking Tech</p>
          <p className='py-4 font-light text-grey text-2xl'>
            The main reason why I working in Tech today is because of some cool
            people that I've been following (and still following) that inspired
            me. Newbiesoft is my way to follow the lead.
          </p>
          <Button
            text='Know More'
            className='font-light text-red border border-red p-2'
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
