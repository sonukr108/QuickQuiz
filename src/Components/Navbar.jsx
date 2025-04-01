import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/QuickQuiz_Logo.png'
import Sideline from '../assets/SideLines.svg'
import lightImage from '../assets/light.svg'
import darkImage from '../assets/dark.svg'

const Navbar = () => {
    const [dark, setDark] = useState(false);


    const changeTheme = () => {
        document.getElementById("root").classList.toggle("dark");
        setDark(prev => !prev);
    }
    return (
        <nav className='bg-[var(--royal-blue)] px-[5%] py-1 flex items-center justify-between text-white text-lg md:px-[8%] dark:bg-black'>
            <div className="logo-part">
                <Link to='/'><img src={logoImg} alt="logo" className='w-40' /></Link>
            </div>
            <div className='md:hidden'>
                <img src={Sideline} className='invert h-8' />
            </div>
            <div className='hidden right-part md:flex gap-6 lg:gap-10 items-center'>
                <span className='hover:font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/'>How it works?</Link></span>
                <span className='hover:font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/'>Features</Link></span>
                <span className='hover:font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/'>About us</Link></span>
                <span className=''>
                    <button title={`${dark? "Switch to Light Mode" : "Switch to Dark Mode"}`} className='p-2 bg-gray-300/15 transition-all duration-200 rounded-full cursor-pointer'>
                        <img src={dark ? lightImage : darkImage} alt="" onClick={() => changeTheme(setDark)} className='invert'/>
                    </button>
                </span>
                <span className='hover:font-semibold hover:text-[var(--dark-yellow)]'>
                    <button className='border-2 border-[var(--blue)] py-2 px-4 hover:bg-[var(--blue)] hover:rounded-xl transition-all duration-200' >
                        Log in
                    </button>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
