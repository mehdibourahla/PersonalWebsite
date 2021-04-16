import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Software from "./views/Software";
import Podcast from "./views/Podcast";
import Member from "./views/Member";

function App() {
  const [currentLive, setCurrentLive] = useState("Software Engineer");
  const [previousLive, setPreviousLive] = useState("");

  useEffect(() => {}, [currentLive, previousLive]);

  function LifeRendering() {
    if (currentLive === "Software Engineer") {
      return <Software></Software>;
    } else if (currentLive === "Newbiesoft") {
      return <Podcast></Podcast>;
    } else {
      return <Member></Member>;
    }
  }
  return (
    <div className='text-black overscroll-y-none'>
      <Header
        currentLive={currentLive}
        setCurrentLive={setCurrentLive}
        previousLive={previousLive}
        setPreviousLive={setPreviousLive}
      ></Header>
      <LifeRendering />

      <Footer></Footer>
    </div>
  );
}

export default App;
