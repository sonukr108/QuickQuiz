import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGripLines } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import logoImg from '../assets/logoLight.png'
import logoDarkImg from '../assets/logoDark.png'


const Navbar = () => {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDarkMode) {
            document.getElementById("root").classList.add("dark");
            setDark(true);
        }
    }, []);

    const changeTheme = () => {
        document.getElementById("root").classList.toggle("dark");
        setDark(prev => !prev);
    }
    const changeMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <nav className='bg-gray-100/30 backdrop-blur-sm text-black dark:bg-black/50 border-b-1 border-b-gray-400/50 dark:text-white px-[5%] md:px-[6%] lg:px-[8%] pt-3 md:py-0 flex flex-col gap-1 text-lg w-full top-0 sticky z-10'>
            <div className='flex items-center justify-between'>
                <div className="logo-part">
                    <Link to='/'><img src={dark ? logoImg : logoDarkImg} alt="logo" className='w-40' /></Link>
                </div>
                <div className='md:hidden flex items-center gap-3'>
                    <span>
                        <button title={`${dark ? "Switch to Light Mode" : "Switch to Dark Mode"}`} onClick={() => changeTheme(setDark)} className='p-2 bg-gray-500/20 transition-all duration-200 rounded-full cursor-pointer'>
                            {dark ? <CiLight size={20} /> :
                                <MdDarkMode size={20} />}
                        </button>
                    </span>
                    <button onClick={changeMenu} className='menu-toggle transition-all duration-300 ease-in-out cursor-pointer'>
                        {menuOpen ? <RxCross2 size={20} /> :
                            <FaGripLines size={20} />}
                    </button>
                </div>
                <div className='hidden right-part md:flex gap-5 lg:gap-10 items-center text-gray-700 dark:text-gray-400 font-semibold'>
                    <span className='hover:text-black dark:hover:text-white py-2 hover:border-b-2 hover:border-black dark:hover:border-white'><Link to='/howitworks'>How it works?</Link></span>
                    <span className='hover:text-black dark:hover:text-white py-2 hover:border-b-2 hover:border-black dark:hover:border-white'><Link to='/features'>Features</Link></span>
                    <span className='hover:text-black dark:hover:text-white py-2 hover:border-b-2 hover:border-black dark:hover:border-white'><Link to='/about'>About us</Link></span>
                    <span className=''>
                        <button title={`${dark ? "Switch to Light Mode" : "Switch to Dark Mode"}`} onClick={() => changeTheme(setDark)} className='p-2 bg-gray-500/20 transition-all duration-200 rounded-full cursor-pointer'>
                            {dark ? <CiLight size={20} /> :
                                <MdDarkMode size={20} />}
                        </button>
                    </span>
                    <span className='hover:font-semibold hover:text-black dark:hover:text-white'>
                        <button className='border-2 border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300' >
                            <Link to='/login'>Log in</Link>
                        </button>
                    </span>
                </div>
            </div>
            <hr className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 h-[1px] my-2" : "opacity-0 h-0 my-0"}`} />
            <div className={`md:hidden bottom-part py-2 right-part flex flex-col gap-3 items-center transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-screen opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                <span><Link to='/howitworks'>How it works?</Link></span>
                <span><Link to='/features'>Features</Link></span>
                <span><Link to='/about'>About us</Link></span>
                <span>
                    <button className='border-2 border-black dark:border-white py-2 px-4 rounded-xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-200'>
                        <Link to='/login'>Log in</Link>
                    </button>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
