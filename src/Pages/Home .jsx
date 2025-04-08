import React, { useEffect, useState } from 'react';
import Category from '../Components/Category';
import { getQuestionsByCategory } from '../Context/Firebase';
import Question from '../Components/Question';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    useEffect(() => {
        const fetchQuestions = async () => {
            if (selectedCategory) {
                const data = await getQuestionsByCategory(selectedCategory);
                setQuestions(data);
            }
        };

        fetchQuestions();
    }, [selectedCategory]);

    return (
        <div className='min-h-[70vh] md:min-h-[80vh] w-full px-[8%] py-10 flex flex-col gap-6'>

            {/* Top Left Button */}
            <div className='w-full flex justify-start'>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='w-fit h-12 border-2 hover:text-black dark:hover:text-white border-black dark:border-gray-300 py-2 px-4 hover:rounded-xl hover:shadow transition-all duration-300'
                >
                    {selectedCategory ? selectedCategory : 'Select Category for start quiz'}
                </button>
            </div>

            {/* Category Modal */}
            <Category
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                setSelectedCategory={setSelectedCategory}
            />

            {/* Questions Section */}
            <div className='min-h-[50vh] md:min-h-[57vh] flex border-1 border-black dark:border-gray-300 py-2 px-4'>
            {questions.length > 0 && (
                <Question selectedQuestions={questions} />
            )}
            </div>
        </div>
    );
};

export default Home;
