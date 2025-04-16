import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import QuizPage from "./components/QuizPage";


const  App = ()  => {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/quize" element={<QuizPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
