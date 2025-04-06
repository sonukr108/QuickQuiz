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
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Quiz Completed!</h1>
        <p className="text-lg">Your Score: {score} / {selectedQuestions.length}</p>
        <button
          onClick={handleRestart}
          className="border px-4 py-2 hover:bg-gray-200 transition-all"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        {currentQuestionIndex + 1}. {selectedQuestions[currentQuestionIndex].question}
      </h2>
      <div className="flex flex-col gap-2">
        {selectedQuestions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="border px-4 py-2 hover:bg-gray-200 transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
