import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function dynamicCells (value, answer) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        cell(num,result ? result[num].letter : undefined,result ? result[num].status : undefined)
      ))}
    </p>
  );
}


function cell( num, letter, status ) {
  const className = status ? `cell ${status}` : 'cell';
  return <span key={num} className={className}>{letter}</span>;
}

function GuessResults({ guesses, answer }) {
  /*return <div class="guess-results">
  <p class="guess">
    <span class="cell">H</span>
    <span class="cell">E</span>
    <span class="cell">L</span>
    <span class="cell">L</span>
    <span class="cell">O</span>
  </p>
  <p class="guess">
    <span class="cell">T</span>
    <span class="cell">H</span>
    <span class="cell">E</span>
    <span class="cell">R</span>
    <span class="cell">E</span>
  </p>
  <p class="guess">
    <span class="cell">W</span>
    <span class="cell">O</span>
    <span class="cell">R</span>
    <span class="cell">L</span>
    <span class="cell">D</span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
</div>;*/

return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        dynamicCells (guesses[num], answer)
      ))}
    </div>
  );

}

export default GuessResults;
