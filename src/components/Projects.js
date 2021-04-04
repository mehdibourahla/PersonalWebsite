import {React,useState} from "react";

const Projects = () => {
    const [projectState,setProjectState] = useState([
        {
            title: 'CSCC Challenge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi, asperiores reprehenderit assumenda iste nobis? Laboriosam debitis architecto, ad, tenetur nihil soluta adipisci quis inventore, ea corrupti officia mollitia rerum!',
            links: {
                github: "https://github.com/mehdibourahla/csccChallenge",
                production: "https://cscc-challenges.herokuapp.com/challenges",
              },
        },
        {
            title: 'CSCC Challenge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi, asperiores reprehenderit assumenda iste nobis? Laboriosam debitis architecto, ad, tenetur nihil soluta adipisci quis inventore, ea corrupti officia mollitia rerum!',
            links: {
                github: "https://github.com/mehdibourahla/csccChallenge",
                production: "https://cscc-challenges.herokuapp.com/challenges",
              },
        },
        {
            title: 'CSCC Challenge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi, asperiores reprehenderit assumenda iste nobis? Laboriosam debitis architecto, ad, tenetur nihil soluta adipisci quis inventore, ea corrupti officia mollitia rerum!',
            links: {
                github: "https://github.com/mehdibourahla/csccChallenge",
                production: "https://cscc-challenges.herokuapp.com/challenges",
              },
        },
        {
            title: 'CSCC Challenge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi, asperiores reprehenderit assumenda iste nobis? Laboriosam debitis architecto, ad, tenetur nihil soluta adipisci quis inventore, ea corrupti officia mollitia rerum!',
            links: {
                github: "https://github.com/mehdibourahla/csccChallenge",
                production: "https://cscc-challenges.herokuapp.com/challenges",
              },
        },
        {
            title: 'CSCC Challenge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi, asperiores reprehenderit assumenda iste nobis? Laboriosam debitis architecto, ad, tenetur nihil soluta adipisci quis inventore, ea corrupti officia mollitia rerum!',
            links: {
                github: "https://github.com/mehdibourahla/csccChallenge",
                production: "https://cscc-challenges.herokuapp.com/challenges",
              },
        },
        {
            title: 'CSCC Challenge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi, asperiores reprehenderit assumenda iste nobis? Laboriosam debitis architecto, ad, tenetur nihil soluta adipisci quis inventore, ea corrupti officia mollitia rerum!',
            links: {
                github: "https://github.com/mehdibourahla/csccChallenge",
                production: "https://cscc-challenges.herokuapp.com/challenges",
              },
        },
    ])
  return (
    <div className='bg-white py-16'>
      <div className='container md:px-32'>
        <div className='md:flex md:items-center'>
          <div className='md:ml-1 w-1/4 md:w-1/6 h-px border border-red md:order-2'></div>
          <h1 className='text-2xl font-semibold'>Other Projects</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {
                projectState.map((project,index) => {
                    return(
                        <div className='bg-black p-2 text-white rounded-lg'>
                        <div className='flex items-center'>
                          <span class='material-icons-outlined text-red'>folder_open</span>
                          <h2 className='font-semibold text-xl ml-2'>{project.title}</h2>
                        </div>
                        <p>{project.description}</p>
                      </div>
                    )
                })
            }
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
