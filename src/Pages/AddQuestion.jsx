import React, { useState } from 'react';
import { addQuestionToFirestore } from '../Context/Firebase';

const AddQuestion = () => {
  const [formData, setFormData] = useState({
    category: '',
    questionId: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctAnswer: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { category, questionId, question, option1, option2, option3, option4, correctAnswer } = formData;

    if (!category || !questionId || !question || !option1 || !option2 || !option3 || !option4 || !correctAnswer) {
      alert("Please fill all fields!");
      return;
    }

    const data = {
      question,
      options: [option1, option2, option3, option4],
      answer: correctAnswer
    };

    try {
      await addQuestionToFirestore(category, questionId, data);
      alert("Question Added Successfully!");

      setFormData({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctAnswer: ''
      });
    } catch (error) {
      alert("Error adding question");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Question</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="category" placeholder="Category (eg: Science)" value={formData.category} onChange={handleChange} className="border p-2 w-full" />
        <input name="questionId" placeholder="Question ID (eg: question-01)" value={formData.questionId} onChange={handleChange} className="border p-2 w-full" />
        <input name="question" placeholder="Question" value={formData.question} onChange={handleChange} className="border p-2 w-full" />
        <input name="option1" placeholder="Option 1" value={formData.option1} onChange={handleChange} className="border p-2 w-full" />
        <input name="option2" placeholder="Option 2" value={formData.option2} onChange={handleChange} className="border p-2 w-full" />
        <input name="option3" placeholder="Option 3" value={formData.option3} onChange={handleChange} className="border p-2 w-full" />
        <input name="option4" placeholder="Option 4" value={formData.option4} onChange={handleChange} className="border p-2 w-full" />
        <input name="correctAnswer" placeholder="Correct Answer" value={formData.correctAnswer} onChange={handleChange} className="border p-2 w-full" />

        <button type="submit" className="bg-black text-white px-4 py-2 w-full">
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
