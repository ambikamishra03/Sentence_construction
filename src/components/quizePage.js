import React, { useState } from "react";
import { sentences, removedWords, filledSentences } from "../assets/data";
import { useNavigate } from "react-router-dom";

const QuizePage = () => {
  const getRandomIndex = () => Math.floor(Math.random() * sentences.length);

  const [index, setIndex] = useState(getRandomIndex());
  const [sentence, setSentence] = useState(sentences[index]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  function handleNext() {
    const newIndex = getRandomIndex();
    setIndex(newIndex);
    setSentence(sentences[newIndex]);
  }
  function handleStart() {
    setScore(0);
    navigate("/");
  }

  function fillDetails(e) {
    const val = sentence[index];
    for (let i = 0; i < val.length; i++) { 
      if (val[i] === "______") {
      val[i] = e.target.innerHTML;
      }
    }
    if (val === filledSentences[index]) {
      setScore((prev) =>  prev=prev + 1);
    }
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h2 className="text-5xl font-bold text-gray-600 mb-6">Ready to play?</h2>
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-lg text-gray-800 mb-4">{sentence}</p>
        <div className="flex justify-center gap-2 mb-4">
          {removedWords[index].map((word, i) => (
            <button
              key={i}
              onClick={fillDetails}
              className="bg-gray-200 text-yellow-900 px-3 py-1 rounded-full font-semibold text-lg"
            >
              {word}
            </button>
          ))}
        </div>
        <div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all m-2">
          score: {score}
          
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
        >
          Show Next
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all m-2"
        onClick={handleStart}>
          Start again
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default QuizePage;
