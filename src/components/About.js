import React from "react";
import Button from "./Button";
import Image from "./Image";
import aboutImg from "../assets/img/mehdi.png";
const About = () => {
  return (
    <div className='bg-black w-full py-16'>
      <div className='container px-4 lg:px-0 lg:flex lg:justify-around '>
        <div className='lg:w-1/2'>
            <p className='text-red'>Hi, my name is</p>
            <p className='text-white text-4xl'>Mehdi Bourahla.</p>
            <p className='text-grey text-4xl'>I build things for the web.</p>
            <p className='py-4 font-light text-grey text-2xl'>
            I'm a software engineer based in Blida - Algeria specializing in
            building excpetional websuites, applications, and everything in
            between.{" "}
            </p>
            <Button
            text='Know More'
            className='font-light text-red border border-red'
            ></Button>
        </div>
        <Image src={aboutImg} alt='Mehdi Bourahla' className="mt-5"></Image>
      </div>
    </div>
  );
};

export default About;