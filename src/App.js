import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import QuizePage from "./components/QuizePage.js";


const  App = ()  => {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/quize" element={<QuizePage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
