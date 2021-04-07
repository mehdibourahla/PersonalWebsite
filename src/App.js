import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from './components/Footer'

import Software from "./components/Software";

function App() {
  const [currentLive, setCurrentLive] = useState("Software Engineer");
  useEffect(() => {
  }, [currentLive])
  return (
    <div className='text-black overscroll-y-none'>
      <Header currentLive={currentLive} setCurrentLive={setCurrentLive}></Header>
      <Software></Software>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
