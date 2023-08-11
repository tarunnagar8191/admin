import  { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

function AddMcq() {
  const [subjects, setSubjects] = useState([
    {
      subjectName: '',
      subjectDescription: '',
      subjectImage: '',
      Date: '',
      marks: '',
      Time: '',
      questions: [
        {
          question: '',
          options: ['', '', '', ''],
          correctAnswer: '',
        },
      ],
    },
  ]);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const handleQuestionChange = (subjectIndex, questionIndex, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[subjectIndex].questions[questionIndex][field] = value;
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        subjectName: '',
        subjectDescription: '',
        subjectImage: '',
        Date: '',
        marks: '',
        Time: '',
        questions: [
          {
            question: '',
            options: ['', '', '', ''],
            correctAnswer: '',
          },
        ],
      },
    ]);
  };

  const addQuestion = (subjectIndex) => {
    const newSubjects = [...subjects];
    newSubjects[subjectIndex].questions.push({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
    });
    setSubjects(newSubjects);
  };

  const deleteSubject = (subjectIndex) => {
    if (subjects.length > 1) {
      const newSubjects = [...subjects];
      newSubjects.splice(subjectIndex, 1);
      setSubjects(newSubjects);
    }
  };

  const deleteQuestion = (subjectIndex, questionIndex) => {
    if (subjects[subjectIndex].questions.length > 1) {
      const newSubjects = [...subjects];
      newSubjects[subjectIndex].questions.splice(questionIndex, 1);
      setSubjects(newSubjects);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(subjects);
    // You can send the data to an API or perform other actions here
  };

  return (
    <>
      {/* Your Sidebar and Navbar components go here */}
      <Navbar title="Add MCQ"/>
    <Sidebar/>
      <div className="container mx-auto px-4 py-8 pl-6">
        <form onSubmit={handleSubmit} className="">
          <div className="grid grid-cols-1">
            {subjects.map((subject, subjectIndex) => (
              <div key={subjectIndex} className="mb-6 p-4 bg-purple-100 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Subject {subjectIndex + 1}</h2>
                <input
                  type="text"
                  placeholder="Subject Name"
                  value={subject.subjectName}
                  onChange={(e) => handleSubjectChange(subjectIndex, 'subjectName', e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Subject Description"
                  value={subject.subjectDescription}
                  onChange={(e) => handleSubjectChange(subjectIndex, 'subjectDescription', e.target.value)}
                  className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                {/* Add more input fields for other subject properties */}
                {subjectIndex !== 0 && (
                  <button
                    type="button"
                    onClick={() => deleteSubject(subjectIndex)}
                    className="mt-4 px-3 py-2 bg-red-500 text-white rounded-md focus:outline-none focus:bg-red-600"
                  >
                    Delete Subject
                  </button>
                )}
                {subject.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="mt-4 p-2 bg-white rounded-md border border-gray-300">
                    <input
                      type="text"
                      placeholder="Question"
                      value={question.question}
                      onChange={(e) => handleQuestionChange(subjectIndex, questionIndex, 'question', e.target.value)}
                      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    {question.options.map((option, optionIndex) => (
                      <input
                        key={optionIndex}
                        type="text"
                        placeholder={`Option ${optionIndex + 1}`}
                        value={option}
                        onChange={(e) => handleQuestionChange(subjectIndex, questionIndex, 'options', [
                          ...question.options.slice(0, optionIndex),
                          e.target.value,
                          ...question.options.slice(optionIndex + 1),
                        ])}
                        className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                    ))}
                    <input
                      type="text"
                      placeholder="Correct Answer"
                      value={question.correctAnswer}
                      onChange={(e) => handleQuestionChange(subjectIndex, questionIndex, 'correctAnswer', e.target.value)}
                      className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    {questionIndex !== 0 && (
                      <button
                        type="button"
                        onClick={() => deleteQuestion(subjectIndex, questionIndex)}
                        className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md focus:outline-none focus:bg-red-600"
                      >
                        Delete Question
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addQuestion(subjectIndex)}
                  className="mt-4 px-3 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600"
                >
                  Add Question
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addSubject}
            className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none focus:bg-green-600"
          >
            Add Subject
          </button>
          <button
            type="submit"
            className="mt-6 ml-4 px-4 py-2 bg-purple-500 text-white rounded-md focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddMcq;
