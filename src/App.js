import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import PlayerScreen from './components/PlayerScreen';
import questions from './questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [winner, setWinner] = useState('');
  
  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setCurrentQuestion(questions[currentQuestionIndex + 1]);
    setWinner('');
  };

  const handleCorrectAnswer = (playerName) => {
    setWinner(playerName);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainScreen question={currentQuestion} winner={winner} nextQuestion={nextQuestion} />}
        />
        <Route
          path="/player/:questionId"
          element={<PlayerScreen question={currentQuestion} onCorrectAnswer={handleCorrectAnswer} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

