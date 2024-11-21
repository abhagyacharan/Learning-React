import React, { useState, useEffect } from 'react';
import { fetchImages } from '../api/fetchimages';
import Card from './Card';
import '../styles/cardcontainer.css';

function CardContainer({ apiKey,handleCardSelection }) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetchImages(apiKey).then(data => setCards(data));
  }, [apiKey]);

  const handleCardClick = () => {
    setCards(shuffle(cards));
  };

  const shuffle = array => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleCardSelectionInternal = (event) => {
    const targetId = event.target.id; 
  
    if (clickedCards.includes(targetId)) {
      setClickedCards([]);
      handleCardSelection(true);
    } else {
      setClickedCards([...clickedCards, targetId]);
      handleCardClick();
      console.log(targetId); 
      handleCardSelection(); 
    }
  };


  return (
    <div className="card-container">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          imageUrl={card.url}
          title={card.title}
          onClick={handleCardSelectionInternal}
        />
      ))}
    </div>
  );
}


export default CardContainer;