import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logoLight.png'
import logoDarkImg from '../assets/logoDark.png'

const Footer = () => {
    return (
        <footer className='bg-white dark:bg-black/50  text-gray-700 dark:text-gray-400 border-t-1 border-b-gray-400/50 px-[5%] md:px-[6%] lg:px-[8%] py-5 '>
            <div className='first flex flex-col justify-center w-full items-center md:items-start text-center md:text-start'>
                <Link to='/'>
                    <img src={logoDarkImg} alt="logo" className='w-40 block dark:hidden' />
                    <img src={logoImg} alt="logo" className='w-40 hidden dark:block' />
                </Link>
                <span className='h-[1px] w-full bg-gray-400'></span>

                <div className='w-full flex flex-col md:flex-row gap-3 py-5 font-semibold text-lg'>
                    <span className='flex flex-col md:w-[50%] gap-2 justify-center md:justify-between'>
                        <h2 className='text-xl font-bold underline'>Contact Us</h2>
                        <p className='hover:font-semibold hover:text-black dark:hover:text-gray-300'><a href="https://www.google.co.in/maps/place/Nutan+Nagar+Colony,+Hazaribagh,+Jharkhand+825303/@23.9947673,85.3833188,15z/data=!3m1!4b1!4m6!3m5!1s0x39f49c6210d0ad1f:0x1e7613d44dde90e9!8m2!3d23.9947282!4d85.3936958!16s%2Fg%2F1hhwjb3t8?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank">825301, Nutan Nagar Hazaribag, Jharkhand India</a></p>
                        <p className='hover:font-semibold hover:text-black dark:hover:text-gray-300'><a href="tel:+91 7857 8836 54">+91 78578 83654</a></p>
                        <p className='hover:font-semibold hover:text-black dark:hover:text-gray-300'><a href="mailto:quickquizsonu@gmail.com">quickquizsonu@gmail.com</a></p>
                    </span>
                    <span className='h-[1px] w-full bg-gray-400 md:hidden'></span>
                    <span className='flex flex-col md:w-fit gap-3 justify-center hover:text-black dark:hover:text-white md:justify-between'>
                        <p className='py-2 hover:border-b-1 dark:hover:border-white'><Link to='/howitworks'>How it works?</Link></p>
                        <p className='py-2 hover:border-b-1 dark:hover:border-white'><Link to='/features'>Features</Link></p>
                        <p className='py-2 hover:border-b-1 dark:hover:border-white'><Link to='/about'>About Us</Link></p>
                    </span>
                </div>
                <span className='h-[1px] w-full bg-gray-400'></span>
                <span className='py-2'>&copy; {new Date().getUTCFullYear()} Coding W0rld, Pvt. Ltd.</span>
            </div>
        </footer>
    )
}

export default Footer
