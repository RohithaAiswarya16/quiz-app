# Quiz App

A **Next.js**-based quiz application built with **TypeScript** and styled using **Tailwind CSS**. The app fetches quiz questions from the Open Trivia Database API, tracks user progress, and displays a report at the end of the quiz.

## Overview

This quiz app allows users to take a multiple-choice quiz with a set of questions fetched from an external API. The app provides the following features:
- A start page where users input their email to begin.
- A timer that counts down from 30 minutes.
- Navigation through the questions with options to go back and forth.
- A final report showing the user's score and correct answers after completing the quiz.

### You can try the deployed version of the app here: **[Deployed Quiz App](https://quiz-app-rohitha-aiswarya-dora-hanumanthus-projects.vercel.app/).**

### Key Features
- **Timer**: The app features a countdown timer, indicating time remaining to complete the quiz. The timer color changes to reflect urgency (green, yellow, red).
- **Navigation**: Users can navigate between questions and see which questions they've answered or visited.
- **Answers**: Users can select answers, and their choices are tracked and displayed in the final report.
- **Final Report**: At the end of the quiz, users see their score, the questions they answered correctly, and the ones they got wrong.

## Components

### 1. **`Quiz` (Main Component)**
   - Manages the quiz state (questions, answers, timer, navigation).
   - Fetches questions from the Open Trivia Database API.
   - Displays the current question, timer, and navigation buttons.
   - Handles the flow of the quiz, from start to finish.

### 2. **`Question`**
   - Displays the current question and its answer choices.
   - Allows users to select answers, which are highlighted upon selection.

### 3. **`QuestionNavigation`**
   - Displays navigation buttons for each question, allowing users to jump between questions.
   - Indicates which questions have been visited and which have been answered.

### 4. **`Report`**
   - Displays the final score and details of each question with the user's selected answers and the correct answers.
   - Includes an option to replay the quiz.

### 5. **`StartPage`**
   - Displays an email input form to start the quiz.
   - Validates the email input before proceeding to the quiz.

### 6. **`Timer`**
   - Tracks the time remaining to complete the quiz.
   - Shows the remaining time in minutes and seconds, updating dynamically.

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/RohithaAiswarya16/quiz_app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quiz_app
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Run the app
   ```bash
   npm run dev
   # or
   yarn dev
   ```
The app should now be running at http://localhost:3000.

## Assumptions

- The app assumes that the user provides a valid email address to begin the quiz.
- The quiz will run for a maximum of 30 minutes, with time tracking in seconds.
- The questions are fetched from an external API, so internet connectivity is required.

## Challenges Faced

1. **Managing Timer State**:
   - Ensuring the timer updated correctly without causing unnecessary re-renders or performance issues was tricky. I used `setInterval` in combination with `useEffect` to update the state every second and clean up the interval when the component unmounts.

2. **Conditional Rendering of Components**:
   - Ensuring the right components (StartPage, Question, Report) were displayed at the appropriate times required conditional rendering logic based on the quiz state. This was a learning curve as it involved handling multiple states (timer, questions, answers, etc.) simultaneously.

3. **Handling Asynchronous Data (API Call)**:
   - Fetching questions asynchronously from the Open Trivia API presented challenges, especially ensuring that the component was re-rendered when the data was available. I managed it using the `useEffect` hook to trigger the fetch on component mount and update the state once the data was fetched.

4. **CSS Styling**:
   - Tailwind CSS provided a lot of flexibility, but fine-tuning the layout and responsiveness across different screen sizes was a challenge. I used utility classes and adjusted the layout to ensure a clean and responsive design.

## Future Improvements

- Implement additional question categories and difficulty levels.
- Add user authentication to track user progress across multiple quizzes.
- Provide an option to download the quiz report as a PDF.
- Implement local storage for saving quiz progress.

