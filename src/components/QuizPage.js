import React, { useState, useEffect } from "react";
import { sentences, removedWords, filledSentences } from "../assets/data";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  const getRandomIndex = () => Math.floor(Math.random() * sentences.length);

  const [index, setIndex] = useState(getRandomIndex());
  const [filledWords, setFilledWords] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isCompleted, setIsCompleted] = useState(false); 

  const blanksCount = (sentences[index].match(/______+/g) || []).length;

  const handleWordClick = (word) => {
    if (filledWords.length >= blanksCount || isCompleted) return;

    const updatedFilled = [...filledWords, word];
    setFilledWords(updatedFilled);

    if (updatedFilled.length === blanksCount) {
      setIsCompleted(true); // lock input
    }
  };

  const getDisplayedSentence = () => {
    let i = 0;
    return sentences[index].replace(/______+/g, () => filledWords[i++] || "______");
  };

  const moveToNextSentence = () => {
    const filledSentence = sentences[index].replace(/______+/g, () => filledWords.shift());
    if (filledSentence === filledSentences[index]) {
      setScore((prev) => prev + 1);
    }

    if (round >= 5) {
      alert(`✅ Game Over! Your final score is ${score}.`);
      navigate("/");
      return;
    }

    const newIndex = getRandomIndex();
    setIndex(newIndex);
    setFilledWords([]);
    setIsCompleted(false);
    setRound((prev) => prev + 1);
    setTimeLeft(60);
  };

  const handleStartAgain = () => {
    setScore(0);
    setRound(1);
    setTimeLeft(60);
    const newIndex = getRandomIndex();
    setIndex(newIndex);
    setFilledWords([]);
    setIsCompleted(false);
    navigate("/");
  };


  // timer 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          moveToNextSentence();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [round]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h2 className="text-5xl font-bold text-gray-600 mb-4">Round {round} / 5</h2>
      <p className="text-xl text-red-500 font-bold mb-2">⏳ Time left: {timeLeft}s</p>

      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-lg text-gray-800 mb-4">{getDisplayedSentence()}</p>

        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          {removedWords[index].map((word, i) => (
            <button
              key={i}
              onClick={() => handleWordClick(word)}
              disabled={filledWords.includes(word) || isCompleted}
              className={`${
                filledWords.includes(word) || isCompleted
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-gray-200 text-yellow-900"
              } px-3 py-1 rounded-full font-semibold text-lg`}
            >
              {word}
            </button>
          ))}
        </div>

        <div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full m-2">
            Score: {score}
          </button>
          <button
            onClick={moveToNextSentence}
            className="bg-green-600 text-white px-6 py-2 rounded-full m-2 hover:bg-green-700"
          >
            Show Next
          </button>
          <button
            onClick={handleStartAgain}
            className="bg-red-600 text-white px-6 py-2 rounded-full m-2 hover:bg-red-700"
          >
            Start again
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
