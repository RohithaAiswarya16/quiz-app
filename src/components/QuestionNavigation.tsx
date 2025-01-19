import React from 'react';

const QuestionNavigation = ({
  totalQuestions,
  currentQuestion,
  visitedQuestions,
  answers,
  onNavigate,
}: {
  totalQuestions: number;
  currentQuestion: number;
  visitedQuestions: Set<number>;
  answers: Record<number, string>;
  onNavigate: (index: number) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {Array.from({ length: totalQuestions }, (_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={`w-10 h-10 rounded ${currentQuestion === i ? 'bg-blue-500 text-white' : answers[i] ? 'bg-green-500 text-white' : visitedQuestions.has(i) ? 'bg-gray-300' : 'bg-gray-100'}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default QuestionNavigation;
