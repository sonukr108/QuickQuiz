import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const topics = [
    "Science",
    "Math",
    "History",
    "Geography",
    "Sports",
    "Technology",
    // "Music",
    // "Movies",
    // "Literature",
    // "Art",
];

const Category = ({ isOpen, onClose, setSelectedCategory }) => {
    const [selectedTopic, setSelectedTopic] = useState('');  // Only one topic

    if (!isOpen) return null;

    const handleSelect = (topic) => {
        setSelectedTopic(topic);  // Set single topic
    };

    const handleStartQuiz = () => {
        if (selectedTopic) {
            setSelectedCategory(selectedTopic);  // Pass to Home
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/20 backdrop-blur-sm bg-opacity-40 z-50">
            <div className="bg-white text-black dark:text-white dark:bg-gray-700 p-8 rounded-xl shadow-lg w-full max-w-xl text-center relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 cursor-pointer text-xl"
                >
                    <RxCross1 />
                </button>

                <h1 className="text-3xl font-bold mb-2">Choose your favorite category</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Select any one category to start quiz
                </p>

                <div className="flex flex-wrap gap-3 justify-center mb-6">
                    {topics.map((topic) => (
                        <div
                            key={topic}
                            onClick={() => handleSelect(topic)}
                            className={`px-4 py-2 cursor-pointer border-1 relative transition-all duration-200
                            ${selectedTopic === topic
                                    ? "border-black dark:border-white rounded-md font-semibold"
                                    : "border-gray-400 text-gray-600 dark:text-gray-400"
                                }
                            `}
                        >
                            {topic}
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleStartQuiz}
                    disabled={!selectedTopic}
                    className={`px-6 py-2 rounded-md font-semibold dark:text-black text-white transition-all duration-200 cursor-pointer
                        ${selectedTopic
                            ? "bg-gray-500 dark:bg-gray-300 hover:bg-gray-700 dark:hover:bg-gray-200"
                            : "bg-gray-300 dark:bg-gray-400 cursor-not-allowed"
                        }
                    `}
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default Category;
