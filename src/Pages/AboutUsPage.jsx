import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsPage = () => {
  return (
    <div className='min-h-[70vh] md:min-h-[80vh] p-[8%] lg:py-7'>
      <h1 className="text-3xl font-bold text-center mb-6">About Us — QuickQuiz</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Empowering Learning Through Fun & Interactive Quizzes</p>

      <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-center">

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Passionate Team of Educators & Developers</li>
            <li>Committed to Modern Learning</li>
            <li>Focused on User-Friendly Design</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Make Learning Engaging & Fun</li>
            <li>Promote Knowledge Sharing</li>
            <li>Help Users Improve Daily</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Create a Global Quiz Community</li>
            <li>Encourage Lifelong Learning</li>
            <li>Innovate Digital Education Tools</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>User-Centric Platform</li>
            <li>Regular Content Updates</li>
            <li>Reward System for Motivation</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Innovation in Learning</li>
            <li>Inclusivity & Accessibility</li>
            <li>Transparency & Trust</li>
          </ul>
        </div>

        <div className='min-w-50 md:min-w-90 flex items-start flex-col min-h-50 p-5 border-1 border-gray-300 dark:border-gray-500 hover:rounded-2xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <h2 className="text-xl font-semibold mb-2">Join Our Journey</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
            <li>Explore New Quizzes</li>
            <li>Challenge Yourself Daily</li>
            <li>Be a Part of Our Growing Community</li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-10">
        <button className='w-fit border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
          <Link to='/'>Explore Quizzes</Link>
        </button>
      </div>
    </div>
  )
}

export default AboutUsPage
