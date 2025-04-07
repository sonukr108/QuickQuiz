import React, { useState } from 'react';

const Question = ({ selectedQuestions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (selectedOption) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    // Check answer
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to next question or show result
    if (currentQuestionIndex + 1 < selectedQuestions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    window.location.reload();
  };

  if (showResult) {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Quiz Completed!</h1>
        <p className="text-lg">Your Score: {score} / {selectedQuestions.length}</p>
        <button
          onClick={handleRestart}
          className="border px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg transition-all duration-300 cursor-pointer"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        {currentQuestionIndex + 1}. {selectedQuestions[currentQuestionIndex].question}
      </h2>
      <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center justify-center flex-wrap gap-3">
        {selectedQuestions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="w-[90%] md:w-[45%] border dark:border-gray-300 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
