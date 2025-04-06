import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesPage = () => {
  return (
    <div className='min-h-[70vh] md:min-h-[80vh] p-[8%] lg:py-10'>
      <h1 class="text-3xl font-bold text-center mb-6">Features — QuickQuiz</h1>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-10">Powerful Features Designed To Make Learning Fun!</p>
      <div class="flex flex-col md:flex-row flex-wrap gap-5 justify-center">

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">1. User Friendly Interface</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Clean & Responsive Design</li>
            <li>Easy To Navigate</li>
            <li>Mobile Friendly Layout</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">2. Multiple Quiz Categories</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>General Knowledge</li>
            <li>Programming & Technology</li>
            <li>Science & Math</li>
            <li>Sports, History & More</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">3. Timed Quizzes</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Countdown Timer For Questions</li>
            <li>Auto Submit On Time Over</li>
            <li>Boosts Speed & Accuracy</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">4. Instant Feedback</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>See Correct Answer Instantly</li>
            <li>Learn With Explanation</li>
            <li>Improve With Every Attempt</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">5. Leaderboard System</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Global Ranking System</li>
            <li>Compete With Friends</li>
            <li>Show Your Name On Top</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 class="text-xl font-semibold mb-2">6. Badges & Rewards</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Earn Achievement Badges</li>
            <li>Unlock Rewards & Points</li>
            <li>Stay Motivated To Learn</li>
          </ul>
        </div>

      </div>

      <div class="text-center mt-10">
        <button className='w-fit border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <Link to='/signup'>Get Started Now</Link>
        </button>
      </div>

    </div>
  )
}

export default FeaturesPage
