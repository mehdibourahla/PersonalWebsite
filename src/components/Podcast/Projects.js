import { React, useState } from "react";

const Projects = () => {
  const [projectState, setProjectState] = useState([
    {
      title: "Data is the new Oil !",
      description:
        "Who said that the crystal ball does not exist? Businesses are using data to explain the past and predict the future!",
      links: {
        youtube:
          "https://youtu.be/QdlfBauZRMw?list=PLD_BGArEI5JN_sUNE_t5OF5S3LyHTdibN",
      },
      tags: ["Data", "Data science", "Business Intelligence"],
    },
    {
      title: "Don't Buy a Nextgen Console!",
      description:
        "The PS5 and Xbox Series X|S are officially launched worldwide today ! Commercials on both sides hyped us up with GRAPHICS and PERFORMANCES (That we've seen years ago with a PC by the way), but still with an affordable price. ",
      links: {
        youtube:
          "https://youtu.be/1K5aetNjFYk?list=PLD_BGArEI5JN_sUNE_t5OF5S3LyHTdibN",
      },
      tags: ["PS5", "XBOX SERIES X", "NextGen"],
    },
    {
      title: "Our Future is in the Clouds!",
      description:
        "Imagine having the performances of thousands of powerful computers through a simple click or tap with your smartphone. Well that's what the cloud is all about !",
      links: {
        youtube:
          "https://youtu.be/j8-ayCagDUc?list=PLD_BGArEI5JN_sUNE_t5OF5S3LyHTdibN",
      },
      tags: ["Cloud", "Internet", "Hosting"],
    },
    {
      title: "MAKE MONEY ONLINE !",
      description:
        "Who hasn't already typed on google on how to make money online ? At least, I did. Every time you end up in some websites (Or some traps) where you're supposed to predict stock price to earn money 😂 Well don't worry, this podcast isn't about that since we'll be talking about Freelance jobs !",
      links: {
        youtube:
          "https://youtu.be/2c_b0lsuCWQ?list=PLD_BGArEI5JN_sUNE_t5OF5S3LyHTdibN",
      },
      tags: ["Freelance", "Money", "Online"],
    },
    {
      title: "Personal Blog",
      description:
        "Simple Blog application developped with NodeJS, manages users, articles and comments. Set permissions to each users and configured routes with middlewares.",
      links: {
        github: "https://github.com/mehdibourahla/Blog",
        production: "https://mehdibourahla.herokuapp.com/blogs",
      },
      tags: ["NodeJS", "ExpressJS", "MongoDB", "Bootstrap"],
    },
    {
      title: "IS SOCIAL MEDIA TOXIC ?",
      description:
        "IT'S 2021! Time for reflecting about your new year resolutions. Maybe having some clarity in mind could be one of your objectives. In this episode of the PodTech Talk, with Mehdi and Wahib, we discuss the impact of Social media on our clarity and thoughts. ",
      links: {
        youtube:
          "https://youtu.be/JPb8gnSsSIo?list=PLD_BGArEI5JN_sUNE_t5OF5S3LyHTdibN",
      },
      tags: ["Social Media", "Toxic", "Discipline"],
    },
  ]);
  return (
    <div className='bg-black py-16'>
      <div className='container px-4 md:px-32'>
        <div className='md:flex md:items-center'>
          <div className='md:ml-1 w-1/4 md:w-1/6 h-px border border-red md:order-2'></div>
          <h1 className='text-2xl text-white font-semibold'>Other Videos</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {projectState.map((project, index) => {
            return (
              <div
                key={index}
                className='flex flex-col justify-between bg-white p-3 text-black rounded-lg'
              >
                <div className='flex items-center'>
                  <span className='material-icons-outlined text-red'>
                    <span class='material-icons-outlined'>
                      play_circle_outline
                    </span>
                  </span>
                  <h2 className='font-semibold text-xl ml-2'>
                    {project.title}
                  </h2>
                </div>
                <p>{project.description}</p>
                <div className='flex justify-between items-center my-2'>
                  <div className='flex flex-wrap text-grey'>
                    {project.tags.map((tag, index) => {
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
                  <div className='flex'>
                    <a href={project.links.youtube}>
                      <i className='fab fa-youtube fa-md text-red'></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
