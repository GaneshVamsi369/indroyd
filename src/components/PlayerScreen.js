import React, { useState } from 'react';

function PlayerScreen({ question, onCorrectAnswer }) {
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === question.correctAnswer.toLowerCase()) {
      onCorrectAnswer(name);
      setFeedback('Correct! You are the winner!');
    } else {
      setFeedback('Wrong answer. Try again!');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>{question.question}</h2>
      </div>

      <div className="center">
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      <div className="center">
        <input 
          type="text" 
          placeholder="Your answer" 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} 
        />
      </div>

      <div className="center">
        <button onClick={handleAnswerSubmit}>Submit Answer</button>
      </div>

      {feedback && (
        <p className={`feedback ${feedback.includes('Correct') ? 'correct' : 'wrong'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
}

export default PlayerScreen;
