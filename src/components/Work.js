import { useState, React } from "react";
import Button from "./Button";
import Image from "./Image";
import jobImg from "../assets/img/web_developer.png";

const Work = () => {
  const [workState, setWorkState] = useState([
    {
      position: "Software Engineer",
      location: "ScriptShock",
      duration: "October 2020 - Present",
      jobDescription: [
        "Write a well-designed, testable and effective code using the best software development practices.",
        "Create a user interface using standard HTML / CSS practices.",
        "Integrate data from various services and back-end databases.",
      ],
      jobImg: jobImg,
      isActive: true,
    },
    {
      position: "Machine Learning Engineer",
      location: "CERIST",
      duration: "September 2019 - September 2020",
      jobDescription: [
        "Write a well-designed, testable and effective code using the best software development practices.",
        "Create a user interface using standard HTML / CSS practices.",
        "Integrate data from various services and back-end databases.",
      ],
      jobImg: jobImg,
      isActive: false,
    },
    {
      position: "IT Assistant",
      location: "WebHelp",
      duration: "Juin 2016 - September 2016",
      jobDescription: [
        "Write a well-designed, testable and effective code using the best software development practices.",
        "Create a user interface using standard HTML / CSS practices.",
        "Integrate data from various services and back-end databases.",
      ],
      jobImg: jobImg,
      isActive: false,
    },
  ]);

  const onClick = e => {
    e.preventDefault();

    setWorkState(
      workState.map(work =>
        e.target.text === work.location
          ? { ...work, isActive: true }
          : { ...work, isActive: false }
      )
    );
  };
  return (
    <div className='bg-white py-16'>
      <div className='container md:px-32'>
        <div className='md:flex md:items-center'>
          <div className='md:ml-1 w-1/4 md:w-1/6 h-px border border-red md:order-2'></div>
          <h1 className='text-2xl font-semibold'> Where I've worked</h1>
        </div>
        <div className="flex-column md:flex">
          <div className='flex justify-around md:block md:pr-8'>
            {workState.map((element, index) => {
              return (
                <Button
                  key={index}
                  text={element.location}
                  className={`block font-semibold my-5 ${
                    element.isActive ? "bg-red text-white" : ""
                  }`}
                  onClick={onClick}
                ></Button>
              );
            })}
          </div>
          {workState.map((element, index) => {
          if (element.isActive) {
            return (
              <div key={index} className='md:flex md:justify-around'>
                <div className='py-4'>
                  <h1 className='text-lg font-semibold'>
                    {element.position}{" "}
                    <span className='text-red'>@{element.location}</span>
                  </h1>
                  <small className='font-light'>{element.duration}</small>
                  <ul className='font-light md:text-xl'>
                    {element.jobDescription.map((elem, index) => {
                      return (
                        <li key={index}>
                          <small>
                            <span className='p-2 material-icons text-red text-sm'>
                              radio_button_checked
                            </span>
                            {elem}
                          </small>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Image src={element.jobImg}></Image>
              </div>
            );
          }
        })}
        </div>
        
      </div>
    </div>
  );
};

export default Work;
