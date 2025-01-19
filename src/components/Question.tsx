import React from 'react';
import { Question as QuestionType } from '../types';

const Question = ({
  question,
  selectedAnswer,
  onAnswer,
}: {
  question: QuestionType;
  selectedAnswer?: string;
  onAnswer: (answer: string) => void;
}) => {
  const choices = [...question.incorrect_answers, question.correct_answer].sort();

  return (
    <div className="mb-8 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl mb-4" dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className="space-y-2">
        {choices.map((choice) => (
          <label
            key={choice}
            className={`block cursor-pointer p-2 rounded ${selectedAnswer === choice ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => onAnswer(choice)}
          >
            <input
              type="radio"
              name="answer"
              value={choice}
              checked={selectedAnswer === choice}
              onChange={() => onAnswer(choice)}
              className="mr-2"
              style={{ display: 'none' }}
            />
            <span dangerouslySetInnerHTML={{ __html: choice }} />
          </label>
        ))}
      </div>
    </div>
  );
};
export default Question;