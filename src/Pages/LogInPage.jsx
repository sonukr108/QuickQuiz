import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import hatImg from '../assets/hat.svg'
import logImg from '../assets/logoLight.png'


const LogInPage = () => {

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);


  return (
    <div className='p-[5%] md:[8%] w-full flex'>
      <div className="left w-full flex flex-col items-center justify-center gap-4 text-center text-lg">
        <span><img src={logImg} alt="logo image" className='invert md:h-40 px-8 z-0' /></span>
        <span className='text-xl'>
          <p>Welcome back!</p>
          <p>Please login/Signup to your account.</p>
        </span>
        <span className={`flex flex-col items-start w-full border-l-4 px-4 md:px-5 py-1 outline-2 outline-[var(--blue-second)] transition-all duration-400 ${emailFocused ? "border-[var(--blue-second)]" : "border-transparent"}`}>
          <label htmlFor="email" className="text-gray-700">Enter Password</label>
          <input type="email" name="email" id="email" className="w-full focus:outline-none text-[var(--blue-second)]"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)} />
        </span>
        <span className={`flex flex-col items-start w-full border-l-4 px-4 md:px-5 py-1 outline-2 outline-[var(--blue-second)] transition-all duration-400 ${passwordFocused ? "border-[var(--blue-second)]" : "border-transparent"}`}>
          <label htmlFor="password" className="text-gray-700">
            Enter Password
          </label>
          <input type="password" name="password" id="password" className="w-full focus:outline-none text-[var(--blue-second)]"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)} />
        </span>
        <span className='flex flex-col md:flex-row justify-between w-full'>
          <p><input type="checkbox" name="remember" id='remember' /><label htmlFor="remember"> Remember Me</label></p>
          <p>Forget password?</p>
        </span>
        <span className="buttons w-full flex flex-col md:flex-row gap-4 items-start md:gap-2">
          <button className='w-fit bg-[var(--sky-blue)] text-gray-800 py-3 px-4 text-xl font-semibold hover:rounded-xl hover:bg-[var(--blue-second)] hover:text-white transition-all duration-300'><Link to='/login'>Log in</Link></button>
          <button className='w-fit hover:bg-[var(--sky-blue)] text-black dark:text-white hover:text-gray-800 py-1 px-2 md:py-3 md:px-4 text-lg md:text-xl font-semibold transition-all duration-300'><Link to='/login'>Sign up</Link></button>
        </span>
      </div>
      <div className="right w-full hidden md:flex items-center justify-center">
        <img src={hatImg} alt="hat image" className='w-[90%]' />
      </div>
    </div>
  )
}

export default LogInPage
