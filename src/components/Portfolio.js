import { React, useState } from "react";
import Image from "./Image";
import SLRimg from "../assets/img/SLR.png";
import CSCCimg from "../assets/img/cscc-challenge.png";
import Snakeimg from "../assets/img/snake.png";

const Portfolio = () => {
  const [portfolioState, setPortfolioState] = useState([
    {
      img: SLRimg,
      title: "Sign Language Recognition",
      description:
        "The main goal of this project is to conceive and realize a solution based on machine learning for sign language recognition that allows the control of a smart home environment through gestures.",
      links: {
        github:
          "https://github.com/mehdibourahla/Machine-Learning-for-Sign-Language-Recognition",
      },
      tags: ["Machine Learning", "Keras", "CNN", "RNN"],
    },
    {
      img: CSCCimg,
      title: "CSCC Challenge",
      description:
        "This project was made for the CSCC members. It consists of a plateform where coding challenges are posted and solved by members. Developed with NodeJS.",
      links: {
        github: "https://github.com/mehdibourahla/csccChallenge",
        production: "https://cscc-challenges.herokuapp.com/challenges",
      },
      tags: ["NodeJS", "ExpressJS", "MongoDB", "Bootstrap"],
    },
    {
      img: Snakeimg,
      title: "SnakeJS",
      description:
        "SnakeJS is the snake game we used to play in Nokia phones developed with Javascript where multiple snakes could appear on the board",
      links: {
        github: "https://github.com/mehdibourahla/SnakeJS",
        production: "https://snakeman-js.netlify.app/",
      },
      tags: ["JavaScript"],
    },
  ]);
  return (
    <div className='bg-black text-white py-16'>
      <div className='container px-4 lg:px-32'>
        <div className='lg:flex lg:items-center'>
          <div className='lg:ml-1 w-1/4 h-px border border-red lg:order-2'></div>
          <h1 className='text-2xl font-semibold'>Some things I've done</h1>
        </div>
        {portfolioState.map((portfolio, index) => {
          return (
            <div
              key={index}
              className={
                "py-8 lg:flex lg:justify-center lg:transform " +
                (index % 2 ? "lg:-translate-x-6" : "lg:translate-x-6")
              }
            >
              <div className={"max-w-lg " + (index % 2 ? "order-1" : "")}>
                <Image hasBorder={true} src={portfolio.img}></Image>
              </div>
              <div
                className={
                  "lg:w-1/3  lg:transform " +
                  (index % 2
                    ? "lg:translate-x-6 lg:text-left"
                    : "lg:-translate-x-6 lg:text-right")
                }
              >
                <small className='text-red font-semibold'>
                  Featured project
                </small>
                <h2 className='text-2xl font-semibold'>{portfolio.title}</h2>
                <div className='bg-black-dark p-2 rounded-lg text-left '>
                  <p>{portfolio.description}</p>
                  <div>
                    <a href={portfolio.links.github}>
                      <i className='fab fa-github fa-md mr-2'></i>
                    </a>
                    {portfolio.links.production && (
                      <a href={portfolio.links.production}>
                        <i className='fas fa-link fa-md'></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className='flex flex-wrap text-grey'>
                  {portfolio.tags.map((tag, index) => {
                    return (
                      <span
                        className='mr-1 mt-2 bg-trueGrey-700 p-1 rounded-lg'
                        key={index}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
