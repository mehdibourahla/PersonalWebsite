import { React, useState } from "react";
import Video from "../Video";
import SLRimg from "../../assets/img/SLR.png";
import CSCCimg from "../../assets/img/cscc-challenge.png";
import Snakeimg from "../../assets/img/snake.png";

const Portfolio = () => {
  const [portfolioState, setPortfolioState] = useState([
    {
      img: SLRimg,
      title: "Is Artificial Intelligence a villain ?",
      description:
        "Artificial Intelligence, Cyborgs, Robots … We’re used to see them as villains in some movies that you might have seen. Will it be the case one day? ",
      links: {
        youtube:
          "https://www.youtube.com/embed/_GQInG-iklg?list=PLD_BGArEI5JN_sUNE_t5OF5S3LyHTdibN",
      },
      tags: ["Artificial Intelligence", "Robots", "Machine Learning"],
    },
    {
      img: CSCCimg,
      title: "Women In Tech!",
      description:
        "TECHNOLOGY HAS NO GENDER! The Tech industry is opened to every creative and willing person. In this episode, our guest, Imene Henni Mansour shares with us her experience as woman in the Tech industry.",
      links: {
        youtube:
          "https://www.youtube.com/embed/5r5Dpzc8aBk?list=PLD_BGArEI5JN_sUNE_t5OF5S3LyHTdibN",
      },
      tags: ["Technology", "Women", "Inspiration"],
    },
    {
      img: Snakeimg,
      title: "YOU'RE NOT SAFE!",
      description:
        "Imagine what could happen if someone gets all your personal information that you have on your devices or on the applications that you're using !",
      links: {
        youtube:
          "https://www.youtube.com/embed/Jgcfg6XKL1Q?list=PLD_BGArEI5JN_sUNE_t5OF5S3LyHTdibN",
      },
      tags: ["Cybersecurity", "Hackers", "Digital data"],
    },
  ]);
  return (
    <div className='bg-white text-black py-16'>
      <div className='container px-4 lg:px-32'>
        <div className='lg:flex lg:items-center'>
          <div className='lg:ml-1 w-1/4 h-px border border-red lg:order-2'></div>
          <h1 className='text-2xl font-semibold'>Cool episodes I've done</h1>
        </div>
        {portfolioState.map((portfolio, index) => {
          return (
            <div
              key={index}
              className={"py-8 lg:flex lg:justify-center lg:items-center "}
            >
              <div className={"mx-4 " + (index % 2 ? "order-1" : "")}>
                <Video src={portfolio.links.youtube}></Video>
              </div>
              <div className={"lg:w-1/3"}>
                <small className='text-red font-semibold'>
                  Featured project
                </small>
                <h2 className='text-2xl font-semibold'>{portfolio.title}</h2>
                <div className='bg-black-dark text-white p-2 rounded-lg text-left '>
                  <p>{portfolio.description}</p>
                  <div>
                    <a href={portfolio.links.youtube}>
                      <i className='fab fa-youtube fa-md mr-2'></i>
                    </a>
                  </div>
                </div>
                <div
                  className={
                    "flex flex-wrap text-grey " +
                    (index % 2 ? "" : "justify-end")
                  }
                >
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
