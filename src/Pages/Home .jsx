import React, { useEffect, useState } from 'react';
import Category from '../Components/Category';
import { getQuestionsByCategory } from '../Context/Firebase';
import Question from '../Components/Question';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [questions, setQuestions] = useState([]);

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
        <div className='min-h-[70vh] md:min-h-[80vh] w-full p-[8%] flex flex-col gap-6'>

            {/* Top Left Button */}
            <div className='w-full flex justify-start'>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='w-fit h-12 border-2 hover:text-black dark:hover:text-white border-black dark:border-white py-2 px-4 hover:rounded-xl hover:shadow transition-all duration-300'
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
            {questions.length > 0 && (
                <Question selectedQuestions={questions} />
            )}

        </div>
    );
};

export default Home;
