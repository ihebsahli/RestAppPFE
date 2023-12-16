import React, { useState } from 'react';
import './pendu.css';

const words = ['HANGMAN', 'JAVASCRIPT', 'REACT', 'COMPONENT', 'STATE', 'PROPS', 'FUNCTION', 'OBJECT', 'ARRAY', 'LOOP'];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function Board() {
  const [word, setWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const handleGuess = (letter) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter]);
      if (!word.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  const getDisplayWord = () => {
    return word.split('').map((letter) => (guesses.includes(letter) ? letter : '_')).join(' ');
  };

  const isGameOver = () => {
    return incorrectGuesses >= 6 || getDisplayWord().indexOf('_') === -1;
  };

  const handleNewGame = () => {
    setWord(getRandomWord());
    setGuesses([]);
    setIncorrectGuesses(0);
  };

  return (
    <div id="pendu-container">
      <h1 className='t' id="title">Le jeu du Pendu</h1>
      <p id="instructions">Devinez le mot en moins de 6 erreurs !</p>
      <p>Nombre d'erreurs : {incorrectGuesses}</p>
      <p id="word">{getDisplayWord()}</p>
      {!isGameOver() && (
        <div>
          <div id="keyboard">
            {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
              <button key={letter} className="btn-letter" onClick={() => handleGuess(letter)}>
                {letter}
              </button>
            ))}
          </div>
        </div>
      )}
      {isGameOver() && (
        <div>
          <p>Le mot était : {word}</p>
          <p>{incorrectGuesses >= 6 ? 'Vous avez perdu !' : 'Vous avez gagné !'}</p>
          <button className="btn-new-game" onClick={handleNewGame}>Nouvelle partie</button>
        </div>
      )}
    </div>
  );
}

export default Board;