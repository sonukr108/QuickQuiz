import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/QuickQuiz_Logo.png'

const Footer = () => {
    return (
        <footer className='bg-[var(--royal-blue)] dark:bg-black px-[5%] md:px-[8%] py-3 text-white text-lg'>
            <div className='first flex flex-col justify-center w-full items-center md:items-start text-center md:text-start'>
                <Link to='/'><img src={LogoImg} alt="logo" className='w-40' /></Link>
                <span className='h-[1px] w-full bg-gray-400'></span>
                
                <div className='w-full flex flex-col md:flex-row gap-3 pt-5'>
                    <span className='flex flex-col md:w-[50%] gap-2 justify-center md:justify-between'>
                        <h2 className='text-xl font-bold underline'>Contact Us</h2>
                        <p className='hover:font-semibold hover:text-[var(--dark-yellow)]'><a href="https://www.google.co.in/maps/place/Nutan+Nagar+Colony,+Hazaribagh,+Jharkhand+825303/@23.9947673,85.3833188,15z/data=!3m1!4b1!4m6!3m5!1s0x39f49c6210d0ad1f:0x1e7613d44dde90e9!8m2!3d23.9947282!4d85.3936958!16s%2Fg%2F1hhwjb3t8?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank">825301, Nutan Nagar Hazaribag, Jharkhand India</a></p>
                        <p className='hover:font-semibold hover:text-[var(--dark-yellow)]'><a href="tel:+91 7857 8836 54">+91 7857 8836 54</a></p>
                        <p className='hover:font-semibold hover:text-[var(--dark-yellow)]'><a href="mailto:quickquizsonu@gmail.com">quickquizsonu@gmail.com</a></p>
                    </span>
                    <span className='h-[1px] w-full bg-gray-400 md:hidden '></span>
                    <span className='flex flex-col w-fit gap-3 justify-center md:justify-between'>
                        <p className='font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/howitworks'>How it works?</Link></p>
                        <p className='font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/features'>Features</Link></p>
                        <p className='font-semibold hover:text-[var(--dark-yellow)] py-2 hover:border-b-2 hover:border-[var(--dark-yellow)]'><Link to='/about'>About Us</Link></p>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
