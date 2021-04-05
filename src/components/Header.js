import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ currentLive, setCurrentLive }) => {
  const [buttonsState, setButtonsState] = useState([
    {
      text: "Software Engineer",
      className:'bg-red text-white'
    },
    {
      text: "Newbiesoft",
      className:'hover:bg-red hover:text-white'
    },
    {
      text: "Active Member",
      className:'hover:bg-red hover:text-white'
    },
  ]);
  const onClick = (e) => {
    setCurrentLive(e.target.text)
    setButtonsState(
      buttonsState.map((button) => 
        button.text === e.target.text ? 
        { ...button, className:'bg-red text-white' } :
        { ...button, className:'hover:bg-red hover:text-white' }
      )
    );
  };

  return (
    <nav className='bg-white w-full pt-1'>
      <div className='container grid justify-items-center'>
        <a href='#' className='text-3xl font-bold'>
          Mehdi <span className='text-red'>M</span> Bourahla
        </a>
        <div className='flex flex-wrap justify-around text-center font-semibold text-sm w-full 
        md:flex-nowrap md:text-xl md:w-2/3'>
          {buttonsState.map((el, index) => {
            return (
              <Button
                key={index}
                text={el.text}
                onClick={onClick}
                className={el.className}
              ></Button>
            );
          })}
        </div>
        <div className='flex justify-between w-full lg:w-1/2 p-2 font-light'>
          <h4><a href='#'>About me</a></h4>
          <h4><a href='#'>Blog</a></h4>
          <h4><a href='#'>Contact</a></h4>
          <h4><a href='#'>Resume</a></h4>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  currentLive: PropTypes.string.isRequired,
};

export default Header;
