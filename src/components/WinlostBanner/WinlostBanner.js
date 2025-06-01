import React from 'react';


function WinlostBanner({ won, numOfGuesses, answer, handleReset}) {
  const [status , setStatus ] = React.useState('');
  
  if (won) {
    return <div className={`happy banner`}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      {<button onClick={ handleReset}><strong>Play Again?</strong></button>}
    </div>
    
  }
  else {

    return <div className={`sad banner`}>{
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>}
        {<button onClick={ handleReset}> <strong>Play Again?</strong></button>}
      </div>;
  }
  
}

export default WinlostBanner;
