
import React, { useState } from 'react';
import '../Remember/remember.css';

function MemoryGame() {
  const [cards, setCards] = useState([
    { id: 1, value: 'Chat', flipped: false },
    { id: 2, value: 'Chien', flipped: false },
    { id: 3, value: 'Lion', flipped: false },
    { id: 4, value: 'Tigre', flipped: false },
    { id: 5, value: 'Oiseau', flipped: false },
    { id: 6, value: 'Poisson', flipped: false },
    { id: 7, value: 'Chat', flipped: false },
    { id: 8, value: 'Chien', flipped: false },
    { id: 9, value: 'Lion', flipped: false },
    { id: 10, value: 'Tigre', flipped: false },
    { id: 11, value: 'Oiseau', flipped: false },
    { id: 12, value: 'Poisson', flipped: false },
  ]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  function handleCardClick(index) {
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    setSelectedCards([...selectedCards, index]);

    if (selectedCards.length === 1) {
      setTimeout(() => {
        const firstIndex = selectedCards[0];
        const secondIndex = index;
        const firstCard = newCards[firstIndex];
        const secondCard = newCards[secondIndex];

        if (firstCard.value === secondCard.value) {
          newCards[firstIndex].found = true;
          newCards[secondIndex].found = true;
        } else {
          newCards[firstIndex].flipped = false;
          newCards[secondIndex].flipped = false;
        }

        setCards(newCards);
        setSelectedCards([]);

        if (newCards.filter(card => !card.found).length === 0) {
          setGameOver(true);
        }
      }, 1000);
    }
  }

  function handleRestart() {
    setCards([
      { id: 1, value: 'Chat', flipped: false },
      { id: 2, value: 'Chien', flipped: false },
      { id: 3, value: 'Lion', flipped: false },
      { id: 4, value: 'Tigre', flipped: false },
      { id: 5, value: 'Oiseau', flipped: false },
      { id: 6, value: 'Poisson', flipped: false },
      { id: 7, value: 'Chat', flipped: false },
      { id: 8, value: 'Chien', flipped: false },
      { id: 9, value: 'Lion', flipped: false },
      { id: 10, value: 'Tigre', flipped: false },
      { id: 11, value: 'Oiseau', flipped: false },
      { id: 12, value: 'Poisson', flipped: false },
    ]);
    setSelectedCards([]);
    setGameOver(false);
    document.getElementById("success-alert").style.display = "none";
    document.getElementById("restart-btn").style.display = "none";
  }

  return (
    <div className="container">
      <div className="alert alert-success text-center" role="alert" id="success-alert" style={{ display: gameOver ? "block" : "none" }}>
        Bravo, vous avez réussi !
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="memory-game">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`memory-card ${card.flipped ? 'flipped' : ''} ${card.found ? 'found' : ''}`}
            onClick={() => !card.flipped && handleCardClick(index)}
          >
            {card.flipped && card.value}
          </div>
        ))}
      </div>
      <div className="text-center" id="restart-btn" style={{ display: gameOver ? "block" : "none" }}>
<button className="btn btn-primary" onClick={handleRestart}>Rejouer</button>
</div>
</div>
);
}

export default MemoryGame;