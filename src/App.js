import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


function App() {
  const[mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert(
    {
      msg:message,
      type:type
    });
    setTimeout(()=>
    {
      setAlert(null);
    },1000);
  }
  const toogleMode = ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = "#212529"
      showAlert("Dark Mode enabled",'success');
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa"
      showAlert("Light Mode enabled",'success');
    }
  }


  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toogleMode = {toogleMode}/>
      <Alerts alert={alert}/>
      <div className="container">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About mode={mode} toogleMode = {toogleMode} toogleGreenColor={toogleGreenColor}/>}/> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Text for Analysis" mode={mode} toogleMode = {toogleMode} toogleGreenColor={toogleGreenColor}/>}/> */}
          <TextForm showAlert={showAlert} heading="Text for Analysis" mode={mode} toogleMode = {toogleMode}/>
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
