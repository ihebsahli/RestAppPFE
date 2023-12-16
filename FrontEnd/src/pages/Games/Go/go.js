import React, { useState } from 'react';
import '../Go/go.css';

function GuessTheNumber() {
  const [secretNumber, setSecretNumber] = useState(Math.ceil(Math.random() * 100));
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleGuess = (event) => {
    event.preventDefault();

    if (guess === '') {
      setFeedback('Veuillez entrer un nombre.');
    } else if (isNaN(guess)) {
      setFeedback('Veuillez entrer un nombre valide.');
    } else if (guess < 1 || guess > 100) {
      setFeedback('Veuillez entrer un nombre entre 1 et 100.');
    } else if (guess < secretNumber) {
      setFeedback('Trop bas !');
    } else if (guess > secretNumber) {
      setFeedback('Trop haut !');
    } else {
      setFeedback('Bravo, vous avez trouvé le nombre !');
    }
  };

  const handleNewGame = () => {
    setSecretNumber(Math.ceil(Math.random() * 100));
    setGuess('');
    setFeedback('');
  };

  return (
    <div id="guess-the-number-container">
      <h1 className='tit' id="title">Devinez le nombre</h1>
      <p id="instructions">Entrez un nombre entre 1 et 100 :</p>
      <form onSubmit={handleGuess}>
        <input className='inp' type="text" value={guess} onChange={(event) => setGuess(event.target.value)} />
        <button className='bt' type="submit">Devinez</button>
      </form>
      <p id="feedback">{feedback}</p>
      {feedback === 'Bravo, vous avez trouvé le nombre !' && (
        <button  id="new-game" onClick={handleNewGame}>
          Nouvelle partie
        </button>
      )}
    </div>
  );
}

export default GuessTheNumber;