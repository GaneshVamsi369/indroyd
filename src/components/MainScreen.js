import React from 'react';
import QRCode from 'react-qr-code';

function MainScreen({ question, winner, nextQuestion }) {
  return (
    <div className="container">
      <div className="card">
        <h1>KBC Game</h1>
        <h2>{question.question}</h2>
      </div>
      
      <div className="qr-section">
        <div className="qr-code">
          <QRCode value={`http://localhost:3000/player/${question.id}`} />
        </div>
        <p>Scan the QR code to participate!</p>
      </div>

      {winner && (
        <div className="winner-section">
          <h2>Congratulations {winner}!</h2>
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
}

export default MainScreen;
