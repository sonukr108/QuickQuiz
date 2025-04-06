import React, { useEffect, useState } from 'react'
import Category from '../Components/Category';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTopics, setSelectedTopics] = useState([]);

    useEffect(() => {
        console.log("Selected Topics:", selectedTopics);
    }, [selectedTopics]);
    
    return (
        <div className='min-h-[70vh] md:min-h-[80vh] w-full p-[8%] flex lg:py-7'>
            <button onClick={() => setIsModalOpen(true)} className='w-fit h-12 border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] transition-all duration-300'>
                Select Categories
            </button>
            <Category isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setSelectedTopics={setSelectedTopics} />
        </div>
    )
}

export default Home 
