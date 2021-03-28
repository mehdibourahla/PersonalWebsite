import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Software from "./components/Software";

function App() {
  const [currentLive, setCurrentLive] = useState("Software Engineer");
  useEffect(() => {
  }, [currentLive])
  return (
    <div className='text-black font-bold'>
      <Header currentLive={currentLive} setCurrentLive={setCurrentLive}></Header>
      <Software></Software>
    </div>
  );
}

export default App;
