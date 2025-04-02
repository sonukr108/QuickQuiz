import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/QuickQuiz_Logo.png'
import Sideline from '../assets/SideLines.svg'
import Cross from '../assets/cross.svg'
import lightImage from '../assets/light.svg'
import darkImage from '../assets/dark.svg'

const Navbar = () => {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const changeTheme = () => {
        document.getElementById("root").classList.toggle("dark");
        setDark(prev => !prev);
    }
    const changeMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <nav className='bg-[var(--royal-blue)] dark:bg-black px-[5%] md:px-[8%] pt-3 md:py-1 flex flex-col gap-1 text-white text-lg sticky top-0'>
            <div className='flex items-center justify-between'>
                <div className="logo-part">
                    <Link to='/'><img src={logoImg} alt="logo" className='w-40' /></Link>
                </div>
                <div className='md:hidden flex items-center gap-3'>
                    <span>
                        <button title={`${dark ? "Switch to Light Mode" : "Switch to Dark Mode"}`} className='p-2 bg-gray-300/15 transition-all duration-200 rounded-full cursor-pointer'>
                            <img src={dark ? lightImage : darkImage} alt="" onClick={() => changeTheme(setDark)} className='invert' />
                        </button>
                    </span>
                    <button onClick={changeMenu} className='menu-toggle transition-all duration-300 ease-in-out'>
                        <img src={menuOpen ? Cross : Sideline} className='invert h-8' alt={menuOpen ? "Close menu" : "Open menu"} />
                    </button>
                </div>
                <div className='hidden right-part md:flex gap-5 lg:gap-10 items-center'>
                    <span className='hover:font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/howitworks'>How it works?</Link></span>
                    <span className='hover:font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/features'>Features</Link></span>
                    <span className='hover:font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/about'>About us</Link></span>
                    <span className=''>
                        <button title={`${dark ? "Switch to Light Mode" : "Switch to Dark Mode"}`} className='p-2 bg-gray-300/15 transition-all duration-200 rounded-full cursor-pointer'>
                            <img src={dark ? lightImage : darkImage} alt="" onClick={() => changeTheme(setDark)} className='invert' />
                        </button>
                    </span>
                    <span className='hover:font-semibold hover:text-black'>
                        <button className='border-2 border-[var(--blue)] py-2 px-4 hover:bg-[var(--blue)] hover:rounded-xl transition-all duration-200' >
                            <Link to='/login'>Log in</Link>
                        </button>
                    </span>
                </div>
            </div>
            <hr className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 h-[1px] my-2" : "opacity-0 h-0 my-0"}`}/>
            <div className={`md:hidden bottom-part py-2 right-part flex flex-col gap-3 items-center transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-screen opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                <span><Link to='/howitworks'>How it works?</Link></span>
                <span><Link to='/features'>Features</Link></span>
                <span><Link to='/about'>About us</Link></span>
                <span>
                    <button className='border-2 border-[var(--blue)] py-2 px-4 hover:bg-[var(--blue)] rounded-xl transition-all duration-200'>
                        <Link to='/login'>Log in</Link>
                    </button>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
