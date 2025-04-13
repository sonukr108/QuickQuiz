import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../assets/logoLight.png'
import logoDarkImg from '../assets/logoDark.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import { registerUser } from '../Context/Firebase'
import { toast } from 'react-toastify';
import SignInwithGoogle from '../Components/SignInwithGoogle';

const SignupPage = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [emailFocused, setEmailFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      toast.error("Please fill all fields!", { position: "top-center" });
      return;
    }

    const res = await registerUser(email, password, name);

    if (res.success) {
      toast.success(res.message, { position: "top-center" });

      setEmail("");
      setPassword("");
      setName("");

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      toast.error(res.message, { position: "top-center" });
    }
  }

  return (
    <div className='dark:bg-gray-950 px-5 md:px-[10%] lg:px-[15%] py-5 w-full min-h-screen flex items-center justify-center'>
      <div className="left w-full md:w-[80%] xl:w-[50%] h-[50%] flex flex-col items-center justify-center gap-4 text-center text-sm">
        <span>
          <img src={logoDarkImg} alt="logo" className='w-20 md:w-40 block dark:hidden' />
          <img src={logoImg} alt="logo" className='w-20 md:w-40 hidden dark:block' />
        </span>
        <span className='text-lg'>
          <p>Please signup to your account.</p>
        </span>
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-center gap-4 text-center'>

          {/* Name Field */}
          <span className={`flex flex-col items-start w-full md:w-[80%] border-l-4 px-4 md:px-5 py-1 outline-2 transition-all duration-400 ${nameFocused ? "border-black dark:border-white" : "border-transparent"}`}>
            <label className="text-gray-700 dark:text-gray-400">Enter name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
          </span>

          {/* Email Field */}
          <span className={`flex flex-col items-start w-full md:w-[80%] border-l-4 px-4 md:px-5 py-1 outline-2 transition-all duration-400 ${emailFocused ? "border-black dark:border-white" : "border-transparent"}`}>
            <label className="text-gray-700 dark:text-gray-400">Enter email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </span>

          {/* Password Field */}
          <span className={`flex flex-col items-start w-full md:w-[80%] border-l-4 px-4 md:px-5 py-1 outline-2 transition-all duration-400 ${passwordFocused ? "border-black dark:border-white" : "border-transparent"}`}>
            <label className="text-gray-700 dark:text-gray-400">Enter Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="w-full focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
          </span>

          <span className='flex flex-col md:flex-row justify-between w-full md:w-[80%]'>
            <p>
              <input type="checkbox" id='remember' onChange={handleShowPassword} />
              <label className='cursor-pointer' htmlFor="remember"> Show Password</label>
            </p>
            <p></p>
          </span>

          {/* Buttons */}
          <div className="buttons flex gap-4 md:gap-5 font-semibold text-gray-700 dark:text-gray-200">
            <button type="submit" className='w-fit border-2 bg-green-400 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
              Sign up
            </button>

            <button className='w-fit border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
              <Link to='/login'>Log in</Link>
            </button>
          </div>
          <SignInwithGoogle />
        </form>

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
