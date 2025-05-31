import React, { useEffect } from 'react';

function GuessInput() {

  const [guess, setGuess] = React.useState('');
  const [firstSubmittedGuess, setFirstSubmittedGuess] = React.useState('');


  function submitWord(event){
    event.preventDefault();
    if (guess.length==5){
      setFirstSubmittedGuess(guess);
    }
    else if (guess.length<5){
      window.alert("Not enough letters")
    }


    setGuess('');

  }

  useEffect(() => {
    console.log("Guess:"+ firstSubmittedGuess)
  }, [firstSubmittedGuess]);


  return (
    
    <form onSubmit={submitWord} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input value= {guess} onChange={(event) => {
        const filteredValue = event.target.value.replace(/[^a-zA-Z]/g, '');
        setGuess(filteredValue.toUpperCase())
        }} id="guess-input" type="text" />
    </form>
  )
}

export default GuessInput;
