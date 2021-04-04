import { React, useState } from "react";
import Image from "./Image";
import aboutImg from "../assets/img/mehdi.png";

const Portfolio = () => {
  const [portfolioState,setPortfolioState] = useState([
    {
      img: aboutImg,
      title: "CSCC Challenge",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste quae eligendi est quos provident atque velit, asperiores aut, iure similique sunt recusandae eius nesciunt adipisci possimus magni incidunt hic.",
      links: {
        github: "https://github.com/mehdibourahla/csccChallenge",
        production: "https://cscc-challenges.herokuapp.com/challenges",
      },
    },
    {
      img: aboutImg,
      title: "CSCC Challenge",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste quae eligendi est quos provident atque velit, asperiores aut, iure similique sunt recusandae eius nesciunt adipisci possimus magni incidunt hic.",
      links: {
        github: "https://github.com/mehdibourahla/csccChallenge",
        production: "https://cscc-challenges.herokuapp.com/challenges",
      },
    },
    {
      img: aboutImg,
      title: "CSCC Challenge",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste quae eligendi est quos provident atque velit, asperiores aut, iure similique sunt recusandae eius nesciunt adipisci possimus magni incidunt hic.",
      links: {
        github: "https://github.com/mehdibourahla/csccChallenge",
        production: "https://cscc-challenges.herokuapp.com/challenges",
      },
    },
  ]);
  return (
    <div className='bg-black text-white py-16'>
      <div className='container md:px-32'>
        <div className='md:flex md:items-center'>
          <div className='md:ml-1 w-1/4 h-px border border-red md:order-2'></div>
          <h1 className='text-2xl font-semibold'>Some things I've done</h1>
        </div>
        {portfolioState.map((portfolio, index) => {
          return (
            <div key={index} className={"py-8 md:flex md:justify-center md:transform " + (index % 2 ? 'md:-translate-x-6' : 'md:translate-x-6')}>
              <div className={index % 2 ? 'order-1' : ''}>
                <Image hasBorder={true} src={portfolio.img}></Image>
              </div>
              <div className={'md:w-1/3  md:transform '+(index % 2 ? 'md:translate-x-6 md:text-left' : 'md:-translate-x-6 md:text-right')}>
                <small className='text-red font-semibold'>
                  Featured project
                </small>
                <h2 className='text-2xl font-semibold'>{portfolio.title}</h2>
                <p className='bg-black-dark p-2 rounded-lg text-left '>
                  {portfolio.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
