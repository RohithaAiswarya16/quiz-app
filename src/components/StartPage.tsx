import React, { useState } from 'react';

const StartPage = ({ onStart }: { onStart: (email: string) => void }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Welcome to the Quiz</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onStart(email);
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded hover:bg-gradient-to-l"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartPage;
