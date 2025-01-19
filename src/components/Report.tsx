import React from 'react';
import { Question} from '../types';

const Report = ({ questions, answers }: { questions: Question[]; answers: Record<number, string> }) => {
  let score = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.correct_answer) score++;
  });

  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Quiz Report</h1>
      <div className="text-xl mb-6">Final Score: {score}/{questions.length}</div>
      {questions.map((q, i) => (
        <div key={i} className="mb-6 p-4 bg-gray-50 rounded">
          <h3 className="font-bold mb-2" dangerouslySetInnerHTML={{ __html: q.question }} />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Your Answer:</p>
              <p className={answers[i] === q.correct_answer ? 'text-green-600' : 'text-red-600'}>{answers[i] || 'Not answered'}</p>
            </div>
            <div>
              <p className="font-semibold">Correct Answer:</p>
              <p className="text-green-600">{q.correct_answer}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center mt-6">
        <button 
          onClick={handlePlayAgain} 
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded hover:bg-gradient-to-l"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Report;
