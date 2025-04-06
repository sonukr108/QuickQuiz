import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logoLight.png'
import logoDarkImg from '../assets/logoDark.png'
import { FaArrowLeftLong } from "react-icons/fa6";


const SignupPage = () => {

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className='px-[4%] md:px-[8%] lg:px-[18%] xl:px-[28%] w-full h-screen flex items-center justify-center'>
      <div className="left w-full flex flex-col items-center justify-center gap-5 text-center text-lg">
        <span>
          <img src={logoDarkImg} alt="logo" className='w-50 md:w-70 block dark:hidden' />
          <img src={logoImg} alt="logo" className='w-50 md:w-70 hidden dark:block' />
        </span>
        <span className='text-xl'>
          <p>Welcome back!</p>
          <p>Please signup to your account.</p>
        </span>
        <span className={`flex flex-col items-start w-full border-l-4 px-4 md:px-5 py-1 outline-2 transition-all duration-400 ${emailFocused ? "border-black dark:border-white" : "border-transparent"}`}>
          <label htmlFor="email" className="text-gray-700 dark:text-gray-400">Enter email</label>
          <input type="email" name="email" id="email" className="w-full focus:outline-none"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)} />
        </span>
        <span className={`flex flex-col items-start w-full border-l-4 px-4 md:px-5 py-1 outline-2 transition-all duration-400 ${passwordFocused ? "border-black dark:border-white" : "border-transparent"}`}>
          <label htmlFor="password" className="text-gray-700 dark:text-gray-400">Enter Password</label>
          <input type={showPassword ? "text" : "password"} name="password" id="password" className="w-full focus:outline-none"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)} />
        </span>
        <span className='flex flex-col md:flex-row justify-between w-full'>
          <p><input type="checkbox" name="remember" id='remember' onChange={handleShowPassword} /><label className='cursor-pointer' htmlFor="remember"> Show Password</label></p>
          <p>Forget password?</p>
        </span>
        <div className="buttons flex gap-4 md:gap-5 font-semibold text-lg xl:text-xl text-gray-700 dark:text-gray-200">
          <button className='w-fit border-2 bg-green-400 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'><Link to='/signup'>Sign up</Link></button>
          <button className='w-fit border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'><Link to='/login'>Log in</Link></button>
        </div>
        <div className='cursor-pointer'>
          <a href='/'>
            <FaArrowLeftLong className="inline" /> <span> &nbsp;Go back home</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
