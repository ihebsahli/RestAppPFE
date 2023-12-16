import React, { useState } from 'react';
import '../Puzz/puzz.css'
      
const questions = [
  { question: 'Quel est le plus grand pays du monde ?', answer: 'Russie' },
  { question: 'Quel est le plus grand océan du monde ?', answer: 'Pacifique' },
  { question: 'Quel est le plus grand désert du monde ?', answer: 'Sahara' },
];
      
function Puzz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
      
  const handleAnswerSubmit = () => {
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }
      
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer('');
  };
      
  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setUserAnswer('');
  };
      
  return (
    <div className='puzz'>
      {currentQuestion < questions.length ? (
        <>
          <h2 className='fin'>{questions[currentQuestion].question}</h2>
          <input className='inn' type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
          <button className='b' onClick={handleAnswerSubmit}>Soumettre</button>
          <p className='pppp'>Score: {score}</p>
        </>
      ) : (
        <>
          <h2 className='fin'>Fin du jeu! Votre score est de {score} sur {questions.length}.</h2>
          <button className='b' onClick={handleRestart}>Rejouer</button>
        </>
      )}
    </div>
  );
}
      
export default Puzz;