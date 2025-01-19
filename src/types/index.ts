export type Question = {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  
  export type QuizState = {
    questions: Question[];
    currentQuestionIndex: number;
    answers: Record<number, string>;
    visitedQuestions: Set<number>;
    timeRemaining: number;
    userEmail: string;
    isComplete: boolean;
  };
  