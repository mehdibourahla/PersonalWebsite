import { React, useState } from "react";

const Projects = () => {
  const [projectState, setProjectState] = useState([
    {
      title: "Reminder App",
      description:
        "This project was thought as a social media where users posts messages called Reminders while others can follow, like, favourite these reminders. Developed with Laravel and VueJS.",
      links: {
        github: "https://github.com/mehdibourahla/reminder-laravel",
      },
      tags: ["PHP", "Laravel", "VueJS"],
    },
    {
      title: "PongJS",
      description:
        "PongJS is the well known Pong game developed with JavaScript where the user has control over a board and plays against an AI.",
      links: {
        github: "https://github.com/mehdibourahla/PongJS",
        production: "pongman.netlify.app",
      },
      tags: ["JavaScript"],
    },
    {
      title: "GoodBoy List",
      description:
        "Goodboy List is a Todo list application where lives a cute dog, and users have to do their task to make the dog happy.",
      links: {
        github: "https://github.com/mehdibourahla/goodboylist",
        production: "https://goodboylist.herokuapp.com/login",
      },
      tags: ["NodeJS", "ExpressJS", "MongoDB", "Bootstrap"],
    },
    {
      title: "Contact Keeper",
      description:
        "Full stack MERN contact manager with React hooks, context & JWT authentication. Developed while following a course on React done by Brad Traversy.",
      links: {
        github: "https://github.com/mehdibourahla/bradtraversy-react-contactKeeper",
        production: "https://contactkeeper-brhl.herokuapp.com/login",
      },
      tags: ["MongoDB", "ExpressJS", "ReactJS", 'NodeJS'],
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
      title: "Algerian Railways",
      description:
        "Algerian Railways is an online plateform for train reservation made for three actors that are the administrator to manage the trains, the consultant to track data and the customers to book reservations. ",
      links: {
        github: "https://github.com/mehdibourahla/Algerian-Railways",
      },
      tags: ["PHP", "HTML/CSS", "Bootstrap"],
    },
    
  ]);
  return (
    <div className='bg-white py-16'>
      <div className='container px-4 md:px-32'>
        <div className='md:flex md:items-center'>
          <div className='md:ml-1 w-1/4 md:w-1/6 h-px border border-red md:order-2'></div>
          <h1 className='text-2xl font-semibold'>Other Projects</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {projectState.map((project, index) => {
            return (
              <div key={index} className='flex flex-col justify-between bg-black p-3 text-white rounded-lg'>
                <div className='flex items-center'>
                  <span className='material-icons-outlined text-red'>
                    folder_open
                  </span>
                  <h2 className='font-semibold text-xl ml-2'>
                    {project.title}
                  </h2>
                </div>
                  <p>{project.description}</p>
                  <div className='flex justify-between my-2'>
                    <div className="flex flex-wrap text-grey">
                      {project.tags.map((tag, index) => {
                      return (
                        <span className='mr-1 mt-2 bg-trueGrey-700 p-1 rounded-lg' key={index}>
                          {tag}
                        </span>
                      );
                    })}
                    </div>
                    <div className='flex'>
                      <a href={project.links.github}>
                        <i className='fab fa-github fa-md'></i>
                      </a>
                      {
                      project.links.production && 
                          <a href={project.links.production }>
                            <i className='fas fa-link fa-md ml-2'></i>
                          </a>
                      }
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
