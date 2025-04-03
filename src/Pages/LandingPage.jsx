import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.svg'

const LandingPage = () => {
  return (
    <div className='min-h-[70vh] md:min-h-[80vh] w-full p-[8%] flex'>
      <div className="left w-full flex justify-center flex-col gap-10">
        <p className='text-4xl font-semibold md:text-5xl xl:text-6xl'>Learn <br /> new concepts <br /> for each question</p>
        <span className='text-gray-500 text-lg md:text-xl border-l-2 border-black dark:border-white pl-3'>We help you prepare for exams and quizes </span>
        <div className="buttons flex flex-col md:flex-row gap-4 md:gap-2">
          <button className='w-fit bg-[var(--sky-blue)] text-gray-800 py-3 px-4 text-xl font-semibold hover:rounded-xl hover:bg-[var(--blue-second)] hover:text-white transition-all duration-300'><Link to='/login'>Start Solving</Link></button>
          <button className='w-fit hover:bg-[var(--sky-blue)] text-black dark:text-white hover:text-gray-800 py-1 px-2 md:py-3 md:px-4 text-lg md:text-xl font-semibold transition-all duration-300'><Link to='/features'>know more</Link></button>
        </div>
      </div>
      <div className="right w-full hidden md:flex items-center justify-center p-0">
        <img src={heroImg} alt="" className=''/>
      </div>
    </div>
  )
}

export default LandingPage
