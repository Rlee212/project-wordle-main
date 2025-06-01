import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults';
import WinlostBanner from '../WinlostBanner/WinlostBanner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameOver, setGameOver]= React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    console.log("num of guesses: "+ guesses.length);
    if (tentativeGuess === answer) {
      console.log("win!")
      setGameOver(true);
      setGameWon(true);
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED-1) {
      setGameOver(true);
    }
  }

  function handleReset() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameOver(false);
    setGameWon(false);
  }
  
  return <div>
      <GuessResults 
        guesses={guesses} 
        answer={answer}
      />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver}/>
      {gameWon === true && <WinlostBanner won={true} numOfGuesses={guesses.length} handleReset={handleReset}/>}
      {gameOver === true && gameWon ===false && <WinlostBanner won={false} answer={answer} handleReset={handleReset}/>}
    </div>;
}

export default Game;
