import React, { useState } from 'react';
import ScoreCard from './components/ScoreCard.jsx';
import CardContainer from './components/CardContainer.jsx';
import './App.css';


function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const apiKey = 'j51NIyd3usDddfuGy6Mu9qYMZzo1GBtV';
  const handleCardSelection = (reset = false) => {
    if (reset) {
      setCurrentScore(0);
    } else {
      setCurrentScore(prevScore => {
        const newScore = prevScore + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
    }
  };


  

  return (
    <div className="app">
      <ScoreCard currentScore={currentScore} bestScore={bestScore} />
      <CardContainer apiKey={apiKey} handleCardSelection={handleCardSelection} />
    </div>
  );
}
export default App