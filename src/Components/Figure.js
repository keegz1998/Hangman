import React from 'react'
// Figure component used to represent the lives the player has as a stick figure
const Figure = ({wrongLetters}) => {
  // Receive the wrongLetters array as a prop that is destructured and store it in a variable to track the amount of mistakes the user makes
    const errors = wrongLetters.length;
    return (
        <svg height="250" width="200" className="figure-container">
        {/*Hangman Pillar SVG*/ }
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />
        {/*Hangman Head*/ }
        {errors > 0 &&  <circle cx="140" cy="70" r="20"  />}
        {/*Hangman Body*/ }
        {errors > 1 &&<line x1="140" y1="90" x2="140" y2="150"  />}
       {/*Hangman Arms*/ }
       {errors > 2 &&<line x1="140" y1="120" x2="120" y2="100"  />}
       {errors > 3 &&<line x1="140" y1="120" x2="160" y2="100"  />}
        {/*Hangman Legs*/ }
        {errors > 4 &&<line x1="140" y1="150" x2="120" y2="180" />}
        {errors > 5 &&<line x1="140" y1="150" x2="160" y2="180" />}
      </svg>
    )
}

export default Figure
