import React from 'react'
import { useNavigate } from 'react-router-dom'

const HowItWorkPage = () => {
  const navigate = useNavigate();

  const handleStartSolving = () => {
    const userName = localStorage.getItem("userName");

    if (userName) {
      navigate('/home');  // User is logged in
    } else {
      navigate('/login'); // User not logged in
    }
  }
  return (
    <div className='min-h-[70vh] md:min-h-[80vh] p-[8%] lg:py-10'>
      <h1 class="text-3xl font-bold text-center mb-6">How It Works — QuickQuiz</h1>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-10">Simple Steps to Start Playing & Learning!</p>
      <div class="flex flex-col md:flex-row flex-wrap gap-5 justify-center">
        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">1. Create Your Account</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Easy Registration with Email</li>
            <li>Secure Login System</li>
            <li>Create Your Profile & Track Progress</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">2. Choose a Quiz Category</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>General Knowledge</li>
            <li>Programming & Technology</li>
            <li>Science & Math</li>
            <li>Sports, History & More</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">3. Start the Quiz</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Multiple Choice Questions (MCQs)</li>
            <li>Timer for Each Question</li>
            <li>Instant Feedback After Every Answer</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">4. Get Your Score</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>View Total Score</li>
            <li>See Correct & Incorrect Answers</li>
            <li>Analyze Performance</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">5. Challenge & Improve</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Play Unlimited Quizzes</li>
            <li>Challenge Friends</li>
            <li>Earn Badges & Rewards</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">6. Track Your Progress</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Quiz History</li>
            <li>Best Scores</li>
            <li>Leaderboard Ranking</li>
          </ul>
        </div>


      </div>
      <div class="text-center mt-10">
      <button onClick={handleStartSolving} className='w-fit border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>Start playing</button>
      </div>

    </div>
  )
}

export default HowItWorkPage
