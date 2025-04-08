import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import heroImg from '../assets/hero.svg'

const LandingPage = () => {

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
    <div className='min-h-[70vh] md:min-h-[80vh] w-full p-[8%] flex lg:py-7'>

      <div className="left w-full flex justify-center flex-col gap-10">
        <p className='text-4xl font-semibold md:text-5xl xl:text-6xl'>Learn <br /> new concepts <br /> for each question</p>

        <span className='bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 text-lg md:text-xl border-l-2 py-2 border-black dark:border-white pl-3'>
          We help you prepare for exams and quizzes
        </span>

        <div className="buttons flex flex-col md:flex-row gap-4 md:gap-5 font-semibold text-lg xl:text-xl text-gray-700 dark:text-gray-400">

          <button
            onClick={handleStartSolving}
            className='w-fit border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
            Start Solving
          </button>

          <button className='w-fit border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
            <Link to='/features'>Know More</Link>
          </button>

        </div>
      </div>

      <div className="right w-full hidden md:flex items-center justify-center">
        <img src={heroImg} alt="" className='lg:scale-135 z-[-10]' />
      </div>

    </div>
  )
}

export default LandingPage
