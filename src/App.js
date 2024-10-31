import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"
// import About from "./components/About";
import React, {useState} from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
    // setInterval(() => {
    //   document.body.style.backgroundColor= "red"
    // }, 200);
    // setInterval(() => {
    //   document.body.style.backgroundColor= "blue"
    // }, 150);
    // setInterval(() => {
    //   document.body.style.backgroundColor= "green"
    // }, 120);
  }
  const toggleMode = ()=>{
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#1e272e'
      showAlert("Dark Mode is enabled", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = '#e8e9ea'
      showAlert("Light Mode is enabled", "success")
    }
  }

  return (
    <>
    {/* this is props */}
     {/* <Router> */}
    <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
     <div className="container my-3">
        {/* <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" 
              element={<About />}>
            </Route>
            <Route exact path="/" */}
              {/* element= */}
              {<TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode} /> }
            {/* ></Route>
          </Routes>
        </div> */}
     </div>
      {/* </Router> */}
    
    </>
  );
}

export default App;
