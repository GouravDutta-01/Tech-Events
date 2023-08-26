import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Events from './components/Events';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=>{
  const [mode, setMode] = useState("light");
  const notify = (message) => {
    toast.success(message);
  };
  const toggleMode = () => {
    setProgress(30);
    if (mode !== "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#181D1F";
      notify("Dark mode has been enabled !");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      notify("Dark mode has been disabled !");
    }
    setProgress(100);
  };
  const [progress, setProgress] = useState(0);
    return (
      <div>
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <ToastContainer position="top-center" autoClose={1000}/>
          <LoadingBar
            height={3}
            color='#de143c'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Events mode={mode} setProgress={setProgress} />
      </div>
    )
}
export default App;

