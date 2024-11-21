import React from 'react';
import '../styles/score.css';

function ScoreCard({ currentScore, bestScore }) {
  return (
    <div className="scorecard">
      <h2>Current Score: {currentScore}</h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
}

export default ScoreCard;