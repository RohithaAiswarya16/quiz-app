import { useState, useEffect } from 'react';
import '../styles/globals.css';
import Report from '@/components/Report';
import Question from '@/components/Question';
import QuestionNavigation from '@/components/QuestionNavigation';
import Timer from '@/components/Timer';
import StartPage from '@/components/StartPage';
import { QuizState } from '@/types';


// Main Quiz Component
export default function Quiz() {
  const [state, setState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
    visitedQuestions: new Set([0]),
    timeRemaining: 30 * 60, // 30 minutes in seconds
    userEmail: '',
    isComplete: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (!state.userEmail || state.isComplete) return;
      setState((prev) => ({
        ...prev,
        timeRemaining: Math.max(0, prev.timeRemaining - 1),
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [state.userEmail, state.isComplete]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=15');
        const data = await response.json();
        setState((prev) => ({ ...prev, questions: data.results }));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleStart = (email: string) => {
    setState((prev) => ({ ...prev, userEmail: email }));
  };

  const handleAnswer = (answer: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentQuestionIndex]: answer },
    }));
  };

  const handleNavigate = (index: number) => {
    setState((prev) => ({
      ...prev,
      currentQuestionIndex: index,
      visitedQuestions: new Set([...prev.visitedQuestions, index]),
    }));
  };

  const handleComplete = () => {
    setState((prev) => ({ ...prev, isComplete: true }));
  };

  if (!state.userEmail) {
    return <StartPage onStart={handleStart} />;
  }

  if (state.isComplete || state.timeRemaining <= 0) {
    return <Report questions={state.questions} answers={state.answers} />;
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex justify-center items-center">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <Timer timeRemaining={state.timeRemaining} onTimeUp={handleComplete} />
        <QuestionNavigation
          totalQuestions={state.questions.length}
          currentQuestion={state.currentQuestionIndex}
          visitedQuestions={state.visitedQuestions}
          answers={state.answers}
          onNavigate={handleNavigate}
        />
        {state.questions[state.currentQuestionIndex] && (
          <Question
            question={state.questions[state.currentQuestionIndex]}
            selectedAnswer={state.answers[state.currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )}
        <div className="flex justify-between">
          <button
            onClick={() => handleNavigate(state.currentQuestionIndex - 1)}
            disabled={state.currentQuestionIndex === 0}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {state.currentQuestionIndex === state.questions.length - 1 ? (
            <button
              onClick={handleComplete}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-500 text-white rounded"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => handleNavigate(state.currentQuestionIndex + 1)}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
