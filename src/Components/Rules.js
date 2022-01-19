import React from 'react'
// Notification component to display at bottom of screen to tell user they entered a repeat letter
const Rules = ({showRules}) => {
    return (       
    <div className={`rules-container ${showRules ? 'show' : ''}`} >
      <h2>Rules of Hangman:</h2>
      <ul>
          <li>A random word is selected and you are required to guess what the letters of the word are.</li>
          <li>You can guess the letters of the word by pressing any key on your keyboard.</li>
          <li>If the letter is correct, the blank spaces of the word will be filled in.</li>
          <li>If the letter is incorrect a limb will be drawn, this demonstrates the amount of lives you have.</li>
          <li>Once all the limbs of the man are drawn, you have lost the game.</li>
         
      </ul>
    </div>
    )
}

export default Rules